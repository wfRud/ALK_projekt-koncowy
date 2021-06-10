import types from "./types";

export const upvote = (currentId, name) => ({
  type: types.VOTE,
  currentId,
  name,
});

export const remove = (currentId) => ({
  type: types.REMOVE,
  currentId,
});
