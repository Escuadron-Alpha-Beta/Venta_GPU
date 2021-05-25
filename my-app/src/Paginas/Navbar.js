import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'; 

class Navbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Productos">Productos</Nav.Link>
            <Nav.Link href="/Perfil">Perfil</Nav.Link>
            <Nav.Link href="/Login">Log In</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default Navbar;