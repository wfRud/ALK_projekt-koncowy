import { combineReducers } from "redux";
import regularReducer from "./regular/reducer";
import hotReducer from "./hot/reducer";

const rootReducer = combineReducers({
  regular: regularReducer,
  hot: hotReducer,
});

export default rootReducer;
