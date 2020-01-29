import { combineReducers } from "redux";
import networksReducer from "./networksReducer";

const rootReducer = combineReducers({
  networks: networksReducer
});

export default rootReducer;
