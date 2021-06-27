import React, { Component } from 'react';
import Web3 from 'web3'
import Marketplace from '../abis/Marketplace.json'
import './style.css'
import {MDBContainer} from "mdbreact";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import FooterPage from './Footer';
class Main extends Component {
    constructor() {
        super()
        this.state = {
            account: '',
            productCount: 0,
            productos: [],
            loading: true
        }
        this.crearProduct = this.crearProduct.bind(this)
        this.comprarProduct = this.comprarProduct.bind(this)
    }
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
            <div id="contenido">
                <h2>Comprar Producto</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Dueño</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="productList">
                        {this.state.productos.map((producto, key) => {
                            return (
                                <tr className="rowData" key={key}>
                                    <th scope="row">{producto.Id.toString()}</th>
                                    <td>{producto.Nombre.toString()}</td>
                                    <td>{producto.Modelo.toString()}</td>
                                    <td>{producto.Cantidad.toString()}</td>
                                    <td>{window.web3.utils.fromWei(producto.price.toString(), 'Ether')} ETH</td>
                                    <td>{producto.Owner}</td>
                                    <td>{!producto.comprado
                                        ? <button
                                            name={producto.Id}
                                            value={producto.price}
                                            onClick={(event) => {
                                                this.comprarProduct(event.target.name, event.target.value)
                                            }}>
                                            Comprar
                                        </button>
                                        : null}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div  style={{height:50}}>
                <header></header>
                <body>
                    <div class="row" style={{ background: '#cfcfd3' }}>
                        <Container style={{ margin: '12px auto' }}>
                            <MDBContainer >
                                <FooterPage  /> 
                            </MDBContainer>
                        </Container>
                    </div>
                </body>
                <footer></footer>
            </div>
        </div>
        );
    }
}

export default Main;