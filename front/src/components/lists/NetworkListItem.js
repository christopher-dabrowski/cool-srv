import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const NetworkListItem = ({ network }) => {
  console.log(network);

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
        <Button color="danger">
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

export default NetworkListItem;