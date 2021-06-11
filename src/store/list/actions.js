import types from "./types";

export const upvote = (currentId, name) => ({
  type: types.VOTE,
  currentId,
  name,
});

export const insert = (flag, item) => ({
  type: types.INSERT,
  flag,
  item,
});

export const clear = (field) => ({
  type: types.CLEAR,
  field,
});

export const remove = (currentId) => ({
  type: types.REMOVE,
  currentId,
});
