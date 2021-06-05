import React, { Component } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavBar bg="dark" variant="dark" fixed="top">
          <NavBar.Brand href="/home">GPU VENTA BOISS</NavBar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Productos">Productos</Nav.Link>
            <Nav.Link href="/Perfil">Perfil</Nav.Link>
            <Nav.Link href="">Account :{this.props.account}</Nav.Link>
          </Nav>
        </NavBar>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default Navbar;