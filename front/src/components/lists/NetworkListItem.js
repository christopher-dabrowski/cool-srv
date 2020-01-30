import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { deleteNetwork } from "../actions";

const NetworkListItem = ({ network, deleteNetwork }) => {
  console.log(network);
  const selfLink = network["_links"].self.href;

  return (
    <ListGroupItem className="d-flex align-items-baseline">
      <b className="flex-grow-1">
        {network.address}
      </b>

      <section>
        <Button color="info">
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit
        </Button>
        <Button color="danger" onClick={() => deleteNetwork(selfLink)}>
          <FontAwesomeIcon icon={faTrash} className="mr-2" />
          Delete
        </Button>
      </section>
    </ListGroupItem>
  );
};

NetworkListItem.propTypes = {
  network: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => (
  {
    deleteNetwork: (url) => dispatch(deleteNetwork(url))
  }
);


export default connect(null, mapDispatchToProps)(NetworkListItem);