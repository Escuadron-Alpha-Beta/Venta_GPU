import React, { Component } from 'react';
import './style.css';
class Venta extends Component {
    render() {
        
        return (
            <div id="contenido">
                <h1>Añadir Producto</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    const name = this.productName.value
                    const modelo = this.productModelo.value
                    const cantidad = this.productCantidad.value
                    const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                    this.props.crearProduct(name, modelo, cantidad, price)
                }}>
                    <div className="form-group mr-sm-2">
                        <input
                            id="productName"
                            type="text"
                            ref={(input) => { this.productName = input }}
                            className="form-control"
                            placeholder="Product Name"
                            required />
                    </div>
                    <div className="form-group mr-sm-2">
                        <input
                            id="productModelo"
                            type="text"
                            ref={(input) => { this.productModelo = input }}
                            className="form-control"
                            placeholder="Product Modelo"
                            required />
                    </div>
                    <div className="form-group mr-sm-2">
                        <input
                            id="productCantidad"
                            type="text"
                            ref={(input) => { this.productCantidad = input }}
                            className="form-control"
                            placeholder="Product Cantidad"
                            required />
                    </div>
                    <div className="form-group mr-sm-2">
                        <input
                            id="productPrice"
                            type="text"
                            ref={(input) => { this.productPrice = input }}
                            className="form-control"
                            placeholder="Product Price"
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">Añadir Producto</button>
                </form>
                <p> </p>
                <h2>Comprar producto</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Dueño</th>
                        </tr>
                    </thead>
                    <tbody id="productList">
                        {this.props.productos.map((producto, key) => {
                            return (
                                <tr key={key}>
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
                                                this.props.comprarProduct(event.target.name, event.target.value)
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
        );
    }
}
export default Venta;