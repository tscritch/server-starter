export interface AuthenticatedUser extends Express.User {
  iss: string;
  sub: string;
  aud: string[];
  iat: number;
  exp: number;
  azp: string;
  scope: string;
}
export interface AuthorizedService extends Express.User {
  sub: string;
  iat: number;
  scope: string;
}
