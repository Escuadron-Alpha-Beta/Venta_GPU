import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter id="footer-content" color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Nuestros Contactos</h5>
            <p>
              Con los siguientes links puede ver mas de nosotros
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://es-la.facebook.com/">Facebook (No tenemos un facebook pero aqui esta el link)</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/mata889">GitHub (El github de un integrante)</a>
              </li>
              <li className="list-unstyled">
                <a href="https://twitter.com">Twitter (El mismo caso que tiene el link de facebook)</a>
              </li>
              <li className="list-unstyled">
                <a href="https://es.linkedin.com/">LinkedIn (Este es otro caso como el link de facebook)</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> GPU-MasterRace.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;