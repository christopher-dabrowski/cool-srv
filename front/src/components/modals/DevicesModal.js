import React from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";

const DevicesModal = ({ match }) => {
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
						<Label>Nazwa hosta</Label>
						<Input type="text" placeholder="Podaj nazwę hosta" />
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
						<Label>Gateway</Label>
						<Input type="text" placeholder="Gateway" />
					</FormGroup>
					<FormGroup>
						<Label>Lokalizacja fizyczna</Label>
						<Input type="text" placeholder="Podaj lokalizację fizyczną" />
					</FormGroup>
					<FormGroup>
						<Label>Vlan</Label>
						<Input type="text" placeholder="Wybierz VLAN" />
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

export default withRouter(DevicesModal);