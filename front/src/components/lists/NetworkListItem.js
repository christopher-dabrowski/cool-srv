import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";

const NetworkListItem = ({ network }) => {
  console.log(network);

  return (
    <ListGroupItem>{network.address}</ListGroupItem>
  );
};

NetworkListItem.propTypes = {
  network: PropTypes.object.isRequired
};

export default NetworkListItem;