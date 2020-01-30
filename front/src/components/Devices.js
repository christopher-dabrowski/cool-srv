import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { fetchDevices } from "./actions";
import { CircleLoader as Loader } from "react-spinners";
import CreateDevice from "./CreateDevice";

import { openCreateDevicekModal } from "./actions";

const Devices = ({ devices, loading, refreshDevices, createModal, openCreateView }) => {
  useEffect(() => { refreshDevices(); }, []);

  return (
    <div>
      <h2 className="text-center">Devices</h2>

      {createModal &&
        <CreateDevice />
      }

      {loading ?
        <Loader
          css={"display: block; margin: 0 auto;"}
          size={70}
          loading={loading}
        />
        :
        <ListGroup>
          {devices.map((d, i) =>
            <ListGroupItem key={i}>
              {d.hostname}
            </ListGroupItem>)}
        </ListGroup>
      }

      <div className="mt-4">
        <Button onClick={() => openCreateView()} color="success">Create</Button>
      </div>

    </div>
  );
};

Devices.propTypes = {
  devices: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  refreshDevices: PropTypes.func.isRequired,
  createModal: PropTypes.bool.isRequired,
  openCreateView: PropTypes.func.isRequired
};

const mapStateToProps = (state) => (
  {
    devices: state.devices.devices,
    loading: state.devices.loading,
    createModal: state.devices.createModal
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    refreshDevices: () => dispatch(fetchDevices()),
    openCreateView: () => dispatch(openCreateDevicekModal()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Devices);