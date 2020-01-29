import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavigationDrawer = () => {

  const style = {
    width: "20%"
  };

  return (
    <Nav vertical pills className="bg-gradient-blue shadow rounded" style={{ width: "20%", height: "80vh" }}>
      <NavItem className="pr-0">
        <NavLink active>
          Networks
        </NavLink>
      </NavItem>
      <NavItem className="pr-0">
        <NavLink>
          Devices
        </NavLink>
      </NavItem>
      <NavItem className="pr-0">
        <NavLink>
          NAT
        </NavLink>
      </NavItem>
      <NavItem className="pr-0">
        <NavLink>
          VLAN
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavigationDrawer;