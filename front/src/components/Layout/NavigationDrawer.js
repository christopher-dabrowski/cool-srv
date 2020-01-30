import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const NavigationDrawer = () => {

  return (
    <Nav vertical pills className="bg-gradient-gray shadow rounded" style={{ width: "20%", height: "80vh" }}>
      <NavItem className="pr-0">
        <NavLink className="nav-link" to="/networks">
          Networks
        </NavLink>
      </NavItem>
      <NavItem className="pr-0">
        <NavLink className="nav-link" to="/devices">
          Devices
        </NavLink>
      </NavItem>
      <NavItem className="pr-0">
        <NavLink className="nav-link" to="/nat">
          NAT
        </NavLink>
      </NavItem>
      <NavItem className="pr-0">
        <NavLink className="nav-link" to="/vlan">
          VLAN
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavigationDrawer;