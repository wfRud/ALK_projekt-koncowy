import types from "../actions/types";
import ImageData from "../../assets/images";

const initialMemes = {
  listName: "Regular",
  list: [
    {
      id: 0,
      title: "mem1",
      upvote: 3,
      downvote: 4,
      img: ImageData[0],
    },
    {
      id: 1,
      title: "mem2",
      upvote: 2,
      downvote: 7,
      img: ImageData[1],
    },
    {
      id: 2,
      title: "mem3",
      upvote: 3,
      downvote: 8,
      img: ImageData[2],
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
