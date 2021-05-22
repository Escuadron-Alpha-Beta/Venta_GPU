import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
      <div >

        <div id="Header">

          <BrowserRouter>
            <div>
              aqui poner lo del header
              <div>
                
              </div>
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
