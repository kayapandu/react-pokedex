import React from 'react';
import { Col, Navbar, NavbarBrand } from 'reactstrap';

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Col>
          <Navbar 
            style={{display: "flex", border: "4px black solid", backgroundColor: "yellow", alignIems: "center", justifyContent: "center", borderRadius: ".5em"}} light expand="md"
            
          >
            <NavbarBrand style={{ fontSize: "28px", fontWeight: "bold"}}>Pokedex</NavbarBrand>
          </Navbar>
        </Col>
    );
  }
}