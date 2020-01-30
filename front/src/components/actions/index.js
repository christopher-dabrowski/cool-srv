// Actions
export const FETCH_NETWORKS = "FETCH_NETWORKS";
export const LOAD_NETWORKS = "LOAD_NETWORKS";
export const DELETE_NETWORK = "DELETE_NETWORK";
export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const loadNetworks = (networks) => {
  return {
    type: LOAD_NETWORKS,
    networks: networks
  };
};

// Action creators
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

    dispatch(fetchNetworks);
  }
  catch (error) {
    dispatch(showMessage("Can't delete this network. Remove connected devices first", "danger"));
    // alert("Can't delete this network. Remove connected devices first");
  }
};

export const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    id: id
  };
};

let id = 0;
export const showMessage = (message, category = "primary") => (dispatch, getState) => {
  dispatch({
    type: SHOW_MESSAGE,
    message: message,
    category: category,
    id: id++
  });

  // TODO: Delete after time
};