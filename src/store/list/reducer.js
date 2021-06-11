import types from "./types";
import ImageData from "../../assets/images";

const initialMemes = {
  listName: "Memes lists",
  mainList: [
    {
      id: 0,
      title: "mem1",
      upvote: 9,
      downvote: 4,
      img: ImageData[0],
    },
    {
      id: 1,
      title: "mem2",
      upvote: 12,
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
  hotList: [],
  regularList: [],
};

const listReducer = (state = initialMemes, action) => {
  switch (action.type) {
    case types.VOTE:
      return {
        ...state,
        mainList: [
          // map array to find current element, return each one which doesn't fit by id.

          ...state.mainList.map((item) => {
            if (item.id !== action.currentId) {
              return item;
            }

            // recognize action name is it "upvote" || "downvote" and increment "upvote"||"downvote" target object property.

            return action.name === "upvote"
              ? {
                  ...item,
                  ...(item.upvote = item.upvote + 1),
                }
              : {
                  ...item,
                  ...(item.downvote = item.downvote + 1),
                };
          }),
        ],
      };
    case types.INSERT:
      return action.flag
        ? {
            ...state,
            hotList: [...state.hotList, action.item],
          }
        : {
            ...state,
            regularList: [...state.regularList, action.item],
          };
    case types.REMOVE:
      return {
        ...state,
        list: [...state.list.filter((item) => item.id !== action.currentId)],
      };
    case types.CLEAR:
      return {
        ...state,
        [action.field]: [],
      };
    default:
      return state;
  }
};

export default listReducer;
