import types from "./types";

const initialHot = {
  listName: "Hot",
  list: [],
};

const hotReducer = (state = initialHot, action) => {
  switch (action.type) {
    case types.INSERT:
      return {
        ...state,
        list: [...state.list, action.item],
      };
    default:
      return state;
  }
};

export default hotReducer;
