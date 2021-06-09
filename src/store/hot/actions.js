import types from "./types";

export const insert = (item, currentId) => ({
  type: types.INSERT,
  item,
  currentId,
});

export const clear = () => ({
  type: types.CLEAR,
});
