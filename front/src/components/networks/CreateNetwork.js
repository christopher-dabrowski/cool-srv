import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

import { cancelCreateNetworkModal } from "../actions";

const CreateNetwork = ({ cancel }) => {

  return (
    <Modal isOpen={true}>
      <ModalHeader>Create netwokr</ModalHeader>
      <ModalBody>
        Nice form
      </ModalBody>

      <ModalFooter>
        <Button className="mr-2" color="success">Do Something</Button>
        <Button onClick={() => cancel()} color="warning">Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

CreateNetwork.propTypes = {
  cancel: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => (
  {
    cancel: () => dispatch(cancelCreateNetworkModal())
  }
);

export default connect(null, mapDispatchToProps)(CreateNetwork);