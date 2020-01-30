import {
  LOAD_NETWORKS,
  FETCH_NETWORKS,
  OPEN_CREATE_NETWORK_MODAL,
  CANCEL_CREATE_NETWORK_MODAL
} from "../actions";

const initialState = {
  loading: false,
  networks: [],
  createModal: false
};

const networksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NETWORKS:
      return {
        ...state,
        loading: true
      };
    case LOAD_NETWORKS:
      return {
        ...state,
        loading: false,
        networks: action.networks
      };

    case OPEN_CREATE_NETWORK_MODAL:
      return {
        ...state,
        createModal: true
      };

    case CANCEL_CREATE_NETWORK_MODAL:
      return {
        ...state,
        createModal: false
      };

    default:
      return state;
  }
};

export default networksReducer;