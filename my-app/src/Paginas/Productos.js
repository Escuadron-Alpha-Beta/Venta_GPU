import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Card from '../components/Card/Card';
import './Productos.css';

class Productos extends React.Component{
    constructor(props) {
        super(props)
        this.state = { img: "" }
    }
    componentDidMount() {}
    render() {
        return(
            <div>
                <div class="card-deck">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        );
    }
}
export default Productos;