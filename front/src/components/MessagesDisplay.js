import React from "react";
import PropTypes from "prop-types";
import { Alert, Button } from "reactstrap";
import { connect } from "react-redux";
import { deleteMessage } from "./actions";

const MessagesDisplay = ({ messages, dismissMessage }) => {

  return (
    <section>
      {messages.map((m) => {

        return <Alert className="mt-2" key={m.id} color={m.category}>
          {m.message}
          <Button onClick={() => dismissMessage(m.id)} type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Alert>;
      })}
    </section>
  );
};

MessagesDisplay.propTypes = {
  messages: PropTypes.array.isRequired,
  dismissMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => (
  {
    messages: state.messages.messages
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    dismissMessage: (id) => dispatch(deleteMessage(id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesDisplay);