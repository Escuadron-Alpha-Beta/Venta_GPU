import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

//var firebase = require("firebase");

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { img: "" }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Container>
                    <MDBContainer>
                        <h4>Una Compañia Hecha Para Gamers</h4>
                        <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">

                        </MDBCarousel>
                    </MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <h6>Aqui vienen los items</h6>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </Container>
                <div class="card w-75">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        )

    }
}
export default Home;