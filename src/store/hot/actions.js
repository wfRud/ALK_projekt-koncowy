import types from "./types";

export const insert = (item) => ({
  type: types.INSERT,
  item,
});

export const remove = (item) => ({
  type: types.REMOVE,
  item,
});

export const clear = () => ({
  type: types.CLEAR,
});
