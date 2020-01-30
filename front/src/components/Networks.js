import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchNetworks } from "./actions";

const Networks = ({ className, networks, loading, refreshNetworks }) => {
  useEffect(() => { refreshNetworks(); }, []);

  return (
    <div className={className}>
      <h2 className="text-center">Networks</h2>
      <Button color="primary" onClick={refreshNetworks}>Refresh</Button>
      <ul>
        <li>
          Sieć 1
        </li>
        <li>
          Network 2
        </li>
      </ul>
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