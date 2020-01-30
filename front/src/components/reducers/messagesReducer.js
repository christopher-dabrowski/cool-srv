import { SHOW_MESSAGE, DELETE_MESSAGE } from "../actions";

const initialState = {
  messages: []
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:

      return {
        ...state,
        messages: [...state.messages, {
          id: action.id,
          message: action.message,
          category: action.category
        }]
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        message: state.messages.filter((m) => m.id !== action.id)
      }

    default:
      return state;
  }
};

export default messagesReducer;