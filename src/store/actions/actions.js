import types from "./types";

const upvote = () => ({
  type: types.upvote,
});

const downvote = () => ({
  type: types.downvote,
});

export default {
  upvote,
  downvote,
};
