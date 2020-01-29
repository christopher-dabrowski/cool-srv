import React from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";

const NetworkModal = ({ match }) => {
    return (
        <Modal isOpen={true}>
            <ModalHeader closeButton>
                Dodaj sieć
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Adres IP</Label>
                        <Input type="text" placeholder="Podaj adres IP" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Maska podsieci</Label>
                        <Input type="text" placeholder="Podaj maskę podsieci" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Opis</Label>
                        <Input type="text" placeholder="Podaj opis" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Adres DNS</Label>
                        <Input type="text" placeholder="Podaj adres DNS" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Lokalizacja fizyczna</Label>
                        <Input type="text" placeholder="Podaj lokalizację fizyczną" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Rutowalne?</Label>
                        <Input type="text" placeholder="Routable?" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Publiczne?</Label>
                        <Input type="text" placeholder="Public?" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Adres dynamiczny?</Label>
                        <Input type="text" placeholder="Dynamic?" />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Link to={`${match.url}`}>
                    <Button color="secondary">
                        Close
                    </Button>
                </Link>
                <Button color="primary">
                    Save Changes
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default withRouter(NetworkModal);