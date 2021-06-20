import types from "./types";

export const add = (item) => ({
  type: types.ADD,
  item,
});

export const vote = (currentId, name) => ({
  type: types.VOTE,
  currentId,
  name,
});
export const setFave = (currentId) => ({
  type: types.SET_FAVE,
  currentId,
});

export const insert = (isHot, item) => ({
  type: types.INSERT,
  isHot,
  item,
});

export const insertFave = (item) => ({
  type: types.INSERT_FAVE,
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
