import types from "./types";

export const upvote = (currentId, name) => ({
  type: types.VOTE,
  currentId,
  name,
});
