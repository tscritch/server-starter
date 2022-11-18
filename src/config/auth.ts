export const auth = {
  domain: process.env.AUTH_DOMAIN || "",
  audience: process.env.AUTH_AUDIENCE || "",
  secret: process.env.AUTH_SECRET || "secret",
};
