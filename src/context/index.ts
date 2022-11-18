import { ExpressContextFunctionArgument } from "@apollo/server/dist/esm/express4";
import { PrismaClient } from "@prisma/client";
import { AuthenticatedUser } from "../_utils/types";
import { getUser } from "./user";
import { prisma } from "../prisma";

export interface IApolloContext {
  prisma: PrismaClient;
  getUser: typeof getUser;
}

export const context = async (
  expressContext: ExpressContextFunctionArgument
): Promise<IApolloContext> => {
  return {
    prisma,
    getUser: async () =>
      getUser(expressContext.req.user as AuthenticatedUser | undefined),
  };
};
