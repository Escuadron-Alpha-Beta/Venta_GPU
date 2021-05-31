import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="card">
                    <img class="card-img-top" src="https://dlcdnwebimgs.asus.com/gain/4FC7967D-EFB8-4848-86B1-4471EB56FE2E/w717/h525" alt="Card image cap"></img> 
                    <div class="card-body">
                        <h5 class="card-title">Producto</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Precio: $1000</h6>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
            </div>
        )
    }
}

export default Card;
