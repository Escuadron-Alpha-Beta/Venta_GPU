import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavBar bg="dark" variant="dark" fixed="top">
          <NavBar.Brand href="/Home">GPU VENTA BOISS</NavBar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Productos">Productos</Nav.Link>
            <Nav.Link href="/Venta">Vender</Nav.Link>
            <Nav.Link href="">Account :{this.props.account}</Nav.Link>
          </Nav>
        </NavBar>
        <br/>
      </div>
    );
  }
}
export default Navbar;