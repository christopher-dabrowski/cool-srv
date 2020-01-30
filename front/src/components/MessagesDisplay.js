import React from "react";
import PropTypes from "prop-types";
import { Alert, Button } from "reactstrap";
import { connect } from "react-redux";

const MessagesDisplay = ({ messages }) => {

  return (
    <section>
      {messages.map((m) => {

        return <Alert className="mt-2" key={m.id} color={m.category}>
          {m.message}
          <Button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Alert>;
      })}
    </section>
  );
};

MessagesDisplay.propTypes = {
  messages: PropTypes.array
};

const mapStateToProps = (state) => (
  {
    messages: state.messages.messages
  }
);

export default connect(mapStateToProps)(MessagesDisplay);