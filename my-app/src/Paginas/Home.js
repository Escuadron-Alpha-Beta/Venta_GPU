import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Container } from 'react-bootstrap';

//var firebase = require("firebase");

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {img:""}
    }
    componentDidMount(){
        
    }
    render(){
        return(
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
        )

    }
}
export default Home;