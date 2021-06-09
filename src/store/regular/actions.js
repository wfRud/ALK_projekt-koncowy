import types from "./types";

const upvote = (currentId, name) => ({
  type: types.VOTE,
  currentId,
  name,
});

export default {
  upvote,
};
