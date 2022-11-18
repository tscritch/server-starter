const axios = require("axios");
/**
 * Handler that will be called during the execution of a PostUserRegistration flow.
 *
 * @param {Event} event - Details about the context and user that has registered.
 */
exports.onExecutePostUserRegistration = async (event) => {
  await axios({
    method: "post",
    url: "",
    data: { authId: event.user.user_id },
    headers: {
      Authorization: event.secrets.auth_secret,
    },
  });
};
