import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from "styled-components";

class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  click = () => {
    // this.props.parentMethod();
    this.props.getData();
  };
  render() {
    const { userName = "null", getData } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">twitterbot</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/dashboard/">dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ianrios">github</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>{userName}</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>run bot</DropdownItem>
                  <DropdownItem onClick={this.click}>update</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>settings</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default styled(NavbarMain)``;
