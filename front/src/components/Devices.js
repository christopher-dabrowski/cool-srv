import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { fetchDevices } from "./actions";
import { CircleLoader as Loader } from "react-spinners";
import CreateDevice from "./CreateDevice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { openCreateDevicekModal, deleteDevice } from "./actions";

const Devices = ({ devices, loading, refreshDevices, createModal, openCreateView, deleteDevice }) => {
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
            <ListGroupItem key={i} className="d-flex align-items-baseline">
              <b className="flex-grow-1">
                {d.hostname}
              </b>

              <section>
                <Button color="danger" onClick={() => deleteDevice(d["_links"].self.href)}>
                  <FontAwesomeIcon icon={faTrash} className="mr-2" />
                  Delete
                </Button>
              </section>
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
  openCreateView: PropTypes.func.isRequired,
  deleteDevice: PropTypes.func.isRequired
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
    deleteDevice: (url) => dispatch(deleteDevice(url))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Devices);