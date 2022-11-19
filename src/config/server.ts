export const server = {
  port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 5005,
  logLevel: process.env.SERVER_LOG_LEVEL || "info",
};
