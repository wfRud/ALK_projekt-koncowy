import types from "../actions/types";

const initialMemes = {
  listName: "Regular",
  list: [
    {
      id: 0,
      title: "mem1",
      upvote: 3,
      downvote: 4,
      img: "../../assets/images/mem1",
    },
    {
      id: 1,
      title: "mem2",
      upvote: 2,
      downvote: 7,
      img: "../../assets/images/mem2",
    },
    {
      id: 2,
      title: "mem3",
      upvote: 3,
      downvote: 8,
      img: "../../assets/images/mem3",
    },
  ],
};

const memReducer = (state = initialMemes, action) => {
  switch (action.type) {
    case types.UPVOTE:
      return {
        ...state,
        list: [
          ...state,
          state.list.forEach((mem) => {
            mem.id = action.item ? mem.upvote + 1 : null;
          }),
        ],
      };
    case types.DOWNVOTE:
      return {
        ...state,
        list: [
          ...state,
          state.list.forEach((mem) => {
            mem.id = action.item ? mem.downvote + 1 : null;
          }),
        ],
      };
    default:
      return state;
  }
};

export default memReducer;
