import React from "react";
import PropTypes from "prop-types";

const Networks = ({ className }) => {

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
    </div>
  );

};

Networks.propTypes = {
  className: PropTypes.string
};

export default Networks;