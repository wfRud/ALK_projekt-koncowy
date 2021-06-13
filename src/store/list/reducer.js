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
      favorite: false,
      img: ImageData[0],
    },
    {
      id: 1,
      title: "mem2",
      upvote: 12,
      downvote: 7,
      favorite: false,
      img: ImageData[1],
    },
    {
      id: 2,
      title: "mem3",
      upvote: 3,
      downvote: 8,
      favorite: false,
      img: ImageData[2],
    },
  ],
  regularList: [],
  hotList: [],
  favoriteList: [],
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
    case types.SETFAVE:
      return {
        ...state,
        mainList: [
          ...state.mainList.map((item) => {
            if (item.id !== action.currentId) {
              return item;
            }

            return {
              ...item,
              ...(item.favorite = !item.favorite),
            };
          }),
        ],
      };
    case types.INSERT:
      return action.isHot
        ? {
            ...state,
            hotList: [...state.hotList, action.item],
          }
        : {
            ...state,
            regularList: [...state.regularList, action.item],
          };
    case types.INSERT_FAVE:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.item],
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
