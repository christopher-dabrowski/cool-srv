import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form } from 'reactstrap';

const VLAN = ({ className }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={className}>
      <h2 className="text-center">Networks</h2>
      <ul>
        <li>
          VLAN 1
        </li>
        <li>
          VLAN 2
        </li>
      </ul>
      <Button variant="primary" onClick={handleShow}>
        Modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dodaj sieć VLAN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nazwa</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
            <Form.Group controlId="deviceList">
              <Form.Label>Urządzenia</Form.Label>
              <Form.Control type="text" placeholder="Wybierz urządzenia" />
            </Form.Group>
            <Form.Group controlId="desc">
              <Form.Label>Opis</Form.Label>
              <Form.Control type="text" placeholder="Podaj opis" />
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

VLAN.propTypes = {
  className: PropTypes.string
};

export default VLAN;