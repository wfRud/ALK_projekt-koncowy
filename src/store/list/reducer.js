import types from "./types";

const initialMemes = {
  listName: "Memes lists",
  allMemeList: [
    {
      downvote: 4,
      favorite: false,
      id: 0,
      title: "Lemmy Is a God",
      img: "mem1.jpg",
      upvote: 9,
      source: "local",
    },
    {
      downvote: 4,
      favorite: true,
      id: 1,
      title: "LinkedIn",
      img: "mem2.jpg",
      upvote: 9,
      source: "local",
    },
    {
      downvote: 4,
      favorite: false,
      id: 2,
      title: "Archidiecezja",
      img: "mem3.jpg",
      upvote: 9,
      source: "local",
    },
  ],
};

const listReducer = (state = initialMemes, action) => {
  switch (action.type) {
    case types.SET_ALLMEMELIST:
      return {
        ...state,
        allMemeList: [...action.item],
      };

    case types.ADD:
      return {
        ...state,
        allMemeList: [...state.allMemeList, action.item],
      };

    case types.VOTE:
      return {
        ...state,
        allMemeList: [
          // map array to find current element, return each one which doesn't fit by id.

          ...state.allMemeList.map((item) => {
            if (item.id !== action.currentId) {
              return item;
            }

            // recognize action name is it "upvote" || "downvote" and increment "upvote"||"downvote" target object property.

            return action.name === "upvote"
              ? {
                  ...item,
                  upvote: item.upvote + 1,
                }
              : {
                  ...item,
                  downvote: item.downvote + 1,
                };
          }),
        ],
      };
    case types.SET_FAVE:
      return {
        ...state,
        allMemeList: [
          ...state.allMemeList.map((item) => {
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
    default:
      return state;
  }
};

export default listReducer;
