import types from "./types";

export const setMainList = (item) => ({
  type: types.SET_MAINLIST,
  item,
});

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
