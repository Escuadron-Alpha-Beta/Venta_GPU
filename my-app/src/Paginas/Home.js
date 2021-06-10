import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "./Home/Carousel";
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
                 <header margin='25px'>
                 <h1 
                        style={
                            {
                                fontSize: 35,
                                textAlign: "center",
                                        
                        }}
                        title="Title attribute">Una Compañia Hecha Para Gamers</h1>
                </header>  
                <div style={{ backgroundImage: `url(${"https://www.modern-notoriety.com/wp-content/uploads/2013/11/dark-wood-flooring.jpg"})` }}>
                <Container style={{ margin: '12px auto'}}>
                    <MDBContainer >                              
                        <Carousel/>   
                    </MDBContainer>
                </Container>
                
                </div>
                </div>
        )

    }
}
export default Home;