import React from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";

const NATModal = ({ match }) => {
	return (
		<Modal isOpen={true}>
			<ModalHeader closeButton>
				Dodaj sieć
            </ModalHeader>
			<ModalBody>
				<Form>
					<FormGroup>
						<Label>Nazwa sieci</Label>
						<Input type="text" placeholder="Podaj nazwę sieci" />
					</FormGroup>
					<FormGroup>
						<Label>Urządzenie</Label>
						<Input type="text" placeholder="Wybierz urządzenie" />
					</FormGroup>
					<FormGroup>
						<Label>Opis</Label>
						<Input type="text" placeholder="Podaj opis" />
					</FormGroup>
					<FormGroup>
						<Label>Adres zewnętrzny</Label>
						<Input type="text" placeholder="Podaj adres zewnętrzny" />
					</FormGroup>
					<FormGroup>
						<Label>Sieć</Label>
						<Input type="text" placeholder="Wybierz sieć" />
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

export default withRouter(NATModal);