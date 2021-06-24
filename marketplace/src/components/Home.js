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
         <div >
                <header margin='20px'>
                        <h1 style={{fontSize: 30,textAlign: "center", color: 'midnightblue',
                            fontFamily: "unset"
                            }}title="Title attribute">
                            <b>Una Compañia Hecha Para Gamers</b>
                        </h1>
                </header>    
            <div class="row" style={{ backgroundImage: `url(${"https://mcdn.wallpapersafari.com/medium/23/52/YLXJ62.png"})` }}>
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