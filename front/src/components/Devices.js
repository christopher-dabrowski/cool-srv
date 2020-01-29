import React from "react";
import PropTypes from "prop-types";
import {Button, Modal, Form} from 'react-bootstrap'

const Devices = ({ className }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={className}>
      <h2 className="text-center">Networks</h2>
      <ul>
        <li>
          Urządzenie 1
        </li>
        <li>
          Device 2
        </li>
      </ul>
      <Button variant="primary" onClick={handleShow}>
        Modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dodaj urządzenie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="ipAddress">
            <Form.Label>Adres IP</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
            <Form.Group controlId="hostname">
            <Form.Label>Nazwa hosta</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
            <Form.Group controlId="desc">
            <Form.Label>Opis</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
            <Form.Group controlId="mac">
            <Form.Label>Adres MAC</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
            <Form.Group controlId="gateway">
            <Form.Label>Gateway?</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
            <Form.Group controlId="location">
            <Form.Label>Lokalizacja fizyczna</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
            <Form.Group controlId="vlan">
            <Form.Label>Podłączony Vlan</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

};

Devices.propTypes = {
  className: PropTypes.string
};

export default Devices;