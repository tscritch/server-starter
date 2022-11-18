import { MutationResolvers } from "../../../generated/graphql";

export const createUser: MutationResolvers["createUser"] = async (
  parent,
  args,
  context,
  info
) => {
  const {
    input: { authId },
  } = args;

  const user = await context.prisma.user.create({
    data: {
      authId,
    },
  });

  return {
    id: user.id,
    authId: user.authId,
  };
};
