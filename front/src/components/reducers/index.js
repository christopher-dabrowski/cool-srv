import { combineReducers } from "redux";
import networksReducer from "./networksReducer";
import messagesReducer from "./messagesReducer";

const rootReducer = combineReducers({
  networks: networksReducer,
  messages: messagesReducer
});

export default rootReducer;
