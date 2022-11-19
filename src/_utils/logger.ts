import { createLogger, format, transports } from "winston";
import { config } from "../config";

export const Log = createLogger({
  level: config.server.logLevel,
  exitOnError: false,
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
    new transports.File({
      filename: `tmp/golfcloud-server.log`,
      format: format.json(),
    }),
  ],
});
