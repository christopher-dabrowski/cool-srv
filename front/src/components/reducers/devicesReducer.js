import { FETCH_DEVICES, LOAD_DEVICES, OPEN_CREATE_DEVICE_MODAL, CLOSE_CREATE_DEVICE_MODAL } from "../actions";

const initailState = {
  devices: [],
  loading: false,
  createModal: false
};

const devicesReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOAD_DEVICES:
      return {
        ...state,
        devices: action.devices,
        loading: false
      };

    case FETCH_DEVICES:
      return {
        ...state,
        loading: true
      };

    case OPEN_CREATE_DEVICE_MODAL:
      return {
        ...state,
        createModal: true
      };

    case CLOSE_CREATE_DEVICE_MODAL:
      return {
        ...state,
        createModal: false
      };

    default:
      return state;
  }
};

export default devicesReducer;