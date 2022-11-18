import { RequestHandler } from "express";
import { config } from "../config";

export const checkAuthSecret: RequestHandler = (req, res, next) => {
  if (req.headers.authorization !== config.auth.secret) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
