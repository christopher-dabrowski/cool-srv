import React from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import NetworkModal from "./modals/NetworkModal";

const Networks = ({ className, match }) => {
  return (
    <div className={className}>
      <h2 className="text-center">Networks</h2>
      <ul>
        <li>
          Sieć 1
        </li>
        <li>
          Network 2
        </li>
      </ul>
      <Link to={`${match.url}/create`}>
        <Button color="primary">
          Modal
        </Button>
      </Link>
      <Router>
        <Switch>
          <Route path="/networks/create">
            <NetworkModal />
          </Route>
        </Switch>
      </Router>
    </div>
  );

};

Networks.propTypes = {
  className: PropTypes.string
};

export default withRouter(Networks);