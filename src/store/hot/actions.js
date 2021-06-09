import types from "./types";

const insert = (item) => ({
  type: types.INSERT,
  item,
});

export default {
  insert,
};
