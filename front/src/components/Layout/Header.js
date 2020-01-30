import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <Navbar color="light" className="navbar-light">
      <Link className="navbar-brand" to="/">
        <span><b>CS</b> - Cool Server</span>
      </Link>
    </Navbar>
  );
};

export default Header;