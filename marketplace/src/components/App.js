import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3'
import Marketplace from '../abis/Marketplace.json'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import Main from './Main'
import Venta from './Venta'
import FooterPage from './Footer';
import './style.css';
class App extends Component {

  async loadWeb3() {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
      }
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
      }
      else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    });
  }
  async loadBlockchainData() {
    const web3 = new Web3(window.web3.currentProvider)
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkID = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkID]
    if (networkData) {
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      this.setState({ productCount })
      //cargar los productos
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.productos(i).call()
        this.setState({
          productos: [...this.state.productos, product]
        })
      }
      this.setState({ loading: false })

    } else {
      window.alert('Contrato de Marketplace no fue reconocido en la RED')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      productos: [],
      loading: true
    }
    this.crearProduct = this.crearProduct.bind(this)
    this.comprarProduct = this.comprarProduct.bind(this)
  }
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()

  }
  crearProduct(Nombre, Modelo, Cantidad, price) {
    this.setState({ loading: true })
    this.state.marketplace.methods.crearProduct(Nombre, Modelo, Cantidad, price).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
      })
  }
  comprarProduct(id, precio) {
    this.setState({ loading: true })
    this.state.marketplace.methods.comprarProduct(id).send({ from: this.state.account, value: precio })
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
      })
  }
  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div id="Header">
            <BrowserRouter>
              <div>
                <Switch>
                  <Route path="/" component={Main} exact />
                  <Route path="/Home" component={Home} exact />
                  <Route path="/Productos" component={Main} exact />
                  <Route path="/Venta" component={Venta} exact />\
                  hacer un if si esta login el usuario y poner perfil
                </Switch>
              </div>
            </BrowserRouter>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
        </div>
      </div>
    );
  }
}

export default App;
