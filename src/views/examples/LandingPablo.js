import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import DemoFooter from "components/Footers/DemoFooter";
import ExamplesNavBar from "components/Navbars/ExamplesNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader";

function LandingPablo() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavBar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Exemplo titulo descrição</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Mais Detalhes
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-camera-compact" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Linda Galeria</h4>
                    <p>Spend your time generating new ideas. You don't have to think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">Ver mais</Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Novas Ideias</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">Ver mais</Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Estatisticas</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">Ver mais</Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Design Empolgante</h4>
                    <p>
                      {" "}
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">Ver mais</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPablo;
