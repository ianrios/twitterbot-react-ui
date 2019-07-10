import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import styled from "styled-components";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
        <hr />
        <p>Link based</p>
        <Nav vertical>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
          <NavLink href="#">Another Link</NavLink>{" "}
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </Nav>
      </div>
    );
  }
}

export default styled(Sidebar)``;
