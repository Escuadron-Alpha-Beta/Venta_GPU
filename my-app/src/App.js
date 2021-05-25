import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'; 

import logo from './logo.svg';
import './App.css';

import Home from "./Paginas/Home";
import Perfil from "./Paginas/Perfil";
import Productos from "./Paginas/Productos";
import Login from "./Paginas/Login";

class App extends Component {

  render() {
    console.log(this.props);
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
        <br />
        <br/>
        <br/>
        <div id="Header">
          <BrowserRouter>
            <div>
              aqui poner lo del header
              
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/Home" component={Home}exact />
                <Route path="/Productos" component={Productos} exact />
                <Route path="/Login" component={Login}exact/>\
                hacer un if si esta login el usuario y poner perfil
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App;
