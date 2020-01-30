import { LOAD_NETWORKS, FETCH_NETWORKS } from "../actions";

const initialState = {
  loading: false,
  networks: []
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

    default:
      return state;
  }
};

export default networksReducer;