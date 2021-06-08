import { createStore } from "redux";
import memReducer from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(memReducer, composeWithDevTools());

export default store;
