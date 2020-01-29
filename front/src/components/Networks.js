import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form } from "reactstrap";

const Networks = ({ className }) => {
  // TODO: Move to Redux
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Button variant="primary" onClick={handleShow}>
        Modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dodaj sieć</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="ipAddress">
              <Form.Label>Adres IP</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres IP" />
            </Form.Group>
            <Form.Group controlId="mask">
              <Form.Label>Maska podsieci</Form.Label>
              <Form.Control type="text" placeholder="Podaj maskę podsieci" />
            </Form.Group>
            <Form.Group controlId="desc">
              <Form.Label>Opis</Form.Label>
              <Form.Control type="text" placeholder="Podaj opis" />
            </Form.Group>
            <Form.Group controlId="dnsAddress">
              <Form.Label>Adres DNS</Form.Label>
              <Form.Control type="text" placeholder="Podaj adres DNS" />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Lokalizacja fizyczna</Form.Label>
              <Form.Control type="text" placeholder="Podaj lokalizację fizyczną" />
            </Form.Group>
            <Form.Group controlId="routable">
              <Form.Label>Rutowalne?</Form.Label>
              <Form.Control type="text" placeholder="Routable?" />
            </Form.Group>
            <Form.Group controlId="public">
              <Form.Label>Publiczne?</Form.Label>
              <Form.Control type="text" placeholder="Public?" />
            </Form.Group>
            <Form.Group controlId="dynamic">
              <Form.Label>Adres dynamiczny?</Form.Label>
              <Form.Control type="text" placeholder="Dynamic?" />
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

Networks.propTypes = {
  className: PropTypes.string
};

export default Networks;