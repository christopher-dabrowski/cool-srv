// Actions
export const FETCH_NETWORKS = "FETCH_NETWORKS";
export const LOAD_NETWORKS = "LOAD_NETWORKS";
export const DELETE_NETWORK = "DELETE_NETWORK";

export const OPEN_CREATE_NETWORK_MODAL = "OPEN_CREATE_NETWORK_MODAL";
export const CLOSE_CREATE_NETWORK_MODAL = "CLOSE_CREATE_NETWORK_MODAL";
export const CREATE_NEW_NETWORK = "CREATE_NEW_NETWORK";

export const FETCH_DEVICES = "FETCH_DEVICES";
export const LOAD_DEVICES = "LOAD_DEVICES";
export const DELETE_DEVICE = "DELETE_DEVICE";

export const OPEN_CREATE_DEVICE_MODAL = "OPEN_CREATE_DEVICE_MODAL";
export const CLOSE_CREATE_DEVICE_MODAL = "CLOSE_CREATE_DEVICE_MODAL";
export const CREATE_NEW_DEVICE = "CREATE_NEW_DEVICE";

export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

// Action creators
export const loadDevices = (devices) => {
  return {
    type: LOAD_DEVICES,
    devices: devices
  };
};

export const fetchDevices = () => async (dispatch, getState, api) => {
  dispatch({
    type: FETCH_DEVICES
  });

  try {
    const url = `${api}/device`;
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    console.log(data);
    dispatch(loadDevices(data["_embedded"].device));
  }
  catch (error) {
    dispatch(showMessage("Unable to connect to database", "danger"));
  }

};

export const createNewDevice = (device) => async (dispatch, getState, api) => {
  const url = `${api}/device`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(device),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error();
    }

    dispatch(showMessage("Device created", "success"));
    dispatch(fetchDevices());
  } catch (error) {
    dispatch(showMessage("Unable to create device", "danger"));
  }

};

export const deleteDevice = (resourceURL) => async (dispatch) => {
  try {
    const response = await fetch(resourceURL, { method: "DELETE" });
    if (!response.ok) {
      throw new Error();
    }

    dispatch(fetchDevices());
  }
  catch (error) {
    dispatch(showMessage("Can't delete this device!", "danger"));
  }
};

export const openCreateDevicekModal = () => {
  return {
    type: OPEN_CREATE_DEVICE_MODAL
  };
};

export const closeCreateDeviceModal = () => {
  return {
    type: CLOSE_CREATE_DEVICE_MODAL
  };
};

export const loadNetworks = (networks) => {
  return {
    type: LOAD_NETWORKS,
    networks: networks
  };
};

export const fetchNetworks = () => async (dispatch, getState, api) => {
  dispatch({
    type: FETCH_NETWORKS
  });

  try {
    const url = `${api}/network`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    dispatch(loadNetworks(data["_embedded"].network));
  }
  catch (error) {
    dispatch(showMessage("Unable to connect to database", "danger"));
    // alert("Unable to connect to database");
  }

};

export const deleteNetwork = (resourceURL) => async (dispatch) => {
  try {
    const response = await fetch(resourceURL, { method: "DELETE" });
    if (!response.ok) {
      throw new Error();
    }

    dispatch(fetchNetworks());
  }
  catch (error) {
    dispatch(showMessage("Can't delete this network. Remove connected devices first", "danger"));
  }
};

export const createNewNetwork = (network) => async (dispatch, getState, api) => {
  const url = `${api}/network`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(network),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error();
    }

    dispatch(showMessage("Network created", "success"));
    dispatch(fetchNetworks());
  } catch (error) {
    dispatch(showMessage("Unable to create network", "danger"));
  }

};

export const openCreateNetworkModal = () => {
  return {
    type: OPEN_CREATE_NETWORK_MODAL
  };
};

export const closeCreateNetworkModal = () => {
  return {
    type: CLOSE_CREATE_NETWORK_MODAL
  };
};

export const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    id: id
  };
};

let idGenerator = 0;
export const showMessage = (message, category = "primary") => (dispatch, getState) => {
  const id = idGenerator++;
  dispatch({
    type: SHOW_MESSAGE,
    message: message,
    category: category,
    id: id
  });

  const FADE_TIME = 3500;
  setTimeout(() => {
    const ids = new Set(getState().messages.messages.map((m) => m.id));

    if (ids.has(id)) {
      dispatch(deleteMessage(id));
    }
  }, FADE_TIME);
};