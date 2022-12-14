import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";
import { config } from "../config";

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
export const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${config.auth.domain}/.well-known/jwks.json`,
  }),
  // Validate the audience and the issuer.
  audience: config.auth.audience,
  issuer: `https://${config.auth.domain}/`,
  algorithms: ["RS256"],
  // Allow unauthenticated access but fail for any token that is invalid
  credentialsRequired: false,
});

export const checkJwtLocal = jwt({
  secret: "secret",
  credentialsRequired: false,
  algorithms: ["HS256"],
});
