import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Modal, ModalBody, ModalHeader, Button,
  Form, Label, FormGroup, Input
} from "reactstrap";

import { closeCreateDevicekModal } from "./actions";

const CreateDevice = ({ close, create }) => {
  const [hostname, setHostname] = useState("");
  const [ip, setIp] = useState("");
  const [mac, setMac] = useState("");
  const [desc, setDesc] = useState("");
  const [gateway, setGateway] = useState(false);
  const [location, setLocation] = useState("");

  const handleCreate = () => {
    create({ hostname, ip, mac, desc, gateway, location });
    close();
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Create device</ModalHeader>
      <ModalBody>
        <Form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
          <FormGroup>
            <Label>Hostname</Label>
            <Input type="text" value={hostname} onChange={(e) => setHostname(e.target.value)} required />
          </FormGroup>
          <FormGroup>
            <Label>IP</Label>
            <Input type="text" value={ip} onChange={(e) => setIp(e.target.value)} pattern="^(\d{1,3}\.){3}\d{1,3}$" />
          </FormGroup>
          <FormGroup>
            <Label>MAC</Label>
            <Input type="text" value={mac} onChange={(e) => setMac(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>Descritption</Label>
            <Input type="textarea" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input className="mr-2" type="checkbox" checked={gateway} onChange={(e) => setGateway(e.target.value)} />
              Is gateway
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>Location</Label>
            <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </FormGroup>

          <Button type="submit" className="mr-2" color="success">Create</Button>
          <Button onClick={() => close()} color="warning">Cancel</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

CreateDevice.propTypes = {
  close: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => (
  {
    close: () => dispatch(closeCreateDevicekModal()),
    // create: (network) => dispatch(createNewNetwork(network))
  }
);

export default connect(null, mapDispatchToProps)(CreateDevice);