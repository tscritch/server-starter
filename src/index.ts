import fs from "fs";
import path from "path";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { resolvers } from "./resolvers";
import { context, IApolloContext } from "./context";
import { config } from "./config";
import { checkJwt, checkJwtLocal } from "./_utils/jwt";
import { checkAuthSecret } from "./_utils/auth";
import { prisma } from "./prisma";

const typeDefs = fs.readFileSync(
  path.join(__dirname, "/schema.graphql"),
  "utf-8"
);

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer<IApolloContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
  });
  await server.start();

  app.post(
    "/auth-create-user",
    checkAuthSecret,
    bodyParser.json(),
    async (req, res) => {
      const { authId } = req.body;
      const user = await prisma.user.create({
        data: {
          authId,
        },
      });

      res.json({ user });
    }
  );

  app.use(process.env.NODE_ENV === "development" ? checkJwtLocal : checkJwt);

  app.get("/", (req, res) => res.send("Ahoy!"));
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context,
    })
  );
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: config.server.port }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${config.server.port}/graphql`
  );
}

startApolloServer();
