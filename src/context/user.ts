// import { User } from "../../data/models";
import { AuthenticatedUser } from "../_utils/types";

export async function getUser(user?: AuthenticatedUser) {
  if (!user || !user.sub) {
    throw new Error("Unauthorized");
  }

  const id: string = user.sub;
  return {};
  // try {
  //   // const user = await User.query().findOne({ id });
  //   // return user.id;
  // } catch (e) {
  //   const message = e.message;
  //   throw new Error(`Could not find user from cognito id: ${message}`);
  // }
}
