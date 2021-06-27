import React from 'react';
import {MDBContainer} from "mdbreact";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "./Home/Carousel";
import FooterPage from './Footer';
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
                <header margin='20px'>
                    <h1 style={{
                        fontSize: 30, textAlign: "center", color: 'midnightblue',
                        fontFamily: "unset"
                    }} title="Title attribute">
                        <b>Una Compañia Hecha Para Gamers</b>
                    </h1>
                </header>
                <div class="row" style={{ backgroundImage: `url(${"https://mcdn.wallpapersafari.com/medium/23/52/YLXJ62.png"})` }}>
                    <Container style={{ margin: '12px auto' }}>
                        <MDBContainer >
                            <Carousel />
                        </MDBContainer>
                    </Container>
                </div>
                    <br/>
                <div style={{height:120}}>
                    <h3 style={{ textAlign: "center" }}>Quienes Somos</h3>
                    <header></header>
                    <body>
                        <label>
                            Somos un grupo de estudiantes de UNITEC con el proposito de crear una pagina que sirva para veder tarjetas de video con el uso de la herramienta BlockChain. Un metodo muy interesante de trabajo
                            donde uno puede crear una base de datos que funcione en bloques. La seguridad que proporciona es alta y se considera muy confiabe, puede ser una gran herramienta que se utilizara mucho en el futuro.
                        </label>
                        <h5 style={{ textAlign: "center" }}>Nuestra Vision y Mission</h5>
                        <label>
                            Como grupo tenemos de mission el lograr pasar la clase con una 110% en la clase. Nuestra vision es lograr ser ingenieros algun dia, donde lograremos trabajar en algo que nos guste, ya sea siendo developer o trabajar
                            la seguridad de alguna applicacion o hasta la creacion de un AI. Bueno al fin y al cabo cada uno lograra seguir los sueños que quiera. Le deseamos exitos a todos los miembros del equipo.
                        </label>
                        <h5 style={{ textAlign: "center" }}>Integrantes</h5>
                        <label>
                            Daniel Salgado
                        </label>
                        <br/>
                        <label>
                            Diego Matamoros    
                        </label>
                        <br/>
                        <label>
                            Franklin Garcia    
                        </label>
                        <br/>
                        <label>
                            Ricardo Sanchez    
                        </label>
                    
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
            
        )
    }
}
export default Home;