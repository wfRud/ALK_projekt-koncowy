import types from "./types";

export const upvote = (currentId, name) => ({
  type: types.VOTE,
  currentId,
  name,
});
export const setFave = (currentId) => ({
  type: types.SETFAVE,
  currentId,
});

export const insert = (isHot, item) => ({
  type: types.INSERT,
  isHot,
  item,
});

export const insertFave = (isFave, item) => ({
  type: types.INSERT_FAVE,
  isFave,
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
