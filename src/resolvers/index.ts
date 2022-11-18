import * as Mutation from "./mutations";

export const resolvers = {
  Query: {
    user: () => {
      return { id: "1", authId: "1" };
    },
  },
  // Mutation,
};
