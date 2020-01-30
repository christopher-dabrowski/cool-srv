import React, { useEffect } from "react";
import { Button, ListGroup } from "reactstrap";
import { connect } from "react-redux";
import NetworkListItem from "./lists/NetworkListItem";
import { CircleLoader as Loader } from "react-spinners";
import PropTypes from "prop-types";

import { fetchNetworks } from "./actions";

const Networks = ({ className, networks, loading, refreshNetworks }) => {
  useEffect(() => { refreshNetworks(); }, []);

  return (
    <div className={className}>
      <h2 className="text-center">Networks</h2>
      <Button color="primary" onClick={refreshNetworks}>Refresh</Button>

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

    </div>
  );

};

Networks.propTypes = {
  className: PropTypes.string,
  networks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  refreshNetworks: PropTypes.func.isRequired
};

const mapStateToProps = (state) => (
  {
    networks: state.networks.networks,
    loading: state.networks.loading
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    refreshNetworks: () => dispatch(fetchNetworks())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Networks);