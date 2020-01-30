// Actions
export const FETCH_NETWORKS = "FETCH_NETWORKS";
export const LOAD_NETWORKS = "LOAD_NETWORKS";

export const loadNetworks = (networks) => {
  return {
    type: LOAD_NETWORKS,
    networks: networks
  };
};

// Action creators
export const fetchNetworks = () => async (dispatch, getState, api) => {
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
    alert("Unable to connect to db");
  }

};