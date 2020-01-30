import React, { useEffect } from "react";
import { Button, ListGroup } from "reactstrap";
import { connect } from "react-redux";
import NetworkListItem from "../lists/NetworkListItem";
import { CircleLoader as Loader } from "react-spinners";
import PropTypes from "prop-types";

import { fetchNetworks, openCreateNetworkModal } from "../actions";
import CreateNetwork from "./CreateNetwork";

const Networks = ({ className, networks, loading, refreshNetworks,
  openCreateView, createModal }) => {
  useEffect(() => { refreshNetworks(); }, []);

  return (
    <div className={className}>
      <h2 className="text-center">Networks</h2>

      {createModal &&
        <CreateNetwork />
      }

      {loading ?
        <Loader
          css={"display: block; margin: 0 auto;"}
          size={70}
          loading={loading}
        />
        :
        <ListGroup>
          {networks.map((n, i) => <NetworkListItem network={n} key={i} />)}
        </ListGroup>
      }

      <div className="mt-4">
        <Button onClick={() => openCreateView()} color="success">Create</Button>
      </div>

    </div>
  );

};

Networks.propTypes = {
  className: PropTypes.string,
  networks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  refreshNetworks: PropTypes.func.isRequired,
  openCreateView: PropTypes.func.isRequired,
  createModal: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => (
  {
    networks: state.networks.networks,
    loading: state.networks.loading,
    createModal: state.networks.createModal
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    refreshNetworks: () => dispatch(fetchNetworks()),
    openCreateView: () => dispatch(openCreateNetworkModal())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Networks);