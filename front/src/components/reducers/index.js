import { combineReducers } from "redux";
import networksReducer from "./networksReducer";
import messagesReducer from "./messagesReducer";
import devicesReducer from "./devicesReducer";

const rootReducer = combineReducers({
  networks: networksReducer,
  messages: messagesReducer,
  devices: devicesReducer
});

export default rootReducer;
