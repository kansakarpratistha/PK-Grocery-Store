import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import image32 from "./images/32.jpg";
import image33 from "./images/33.jpg";
import image34 from "./images/34.jpg";
import image35 from "./images/35.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faGoogle,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Team() {
  return (
    <div className="team">
      <Container>
        <h3>Meet Our Amazing Team</h3>
        <div className="agileits_team_grids">
          <Row>
            <Col md={3} className="agileits_team_grid">
              <Image src={image32} alt=" " className="img-responsive" fluid />
              <h4>Martin Paul</h4>
              <p>Manager</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="agileits_team_grid">
              <Image src={image33} alt=" " className="img-responsive" fluid />
              <h4>Michael Rick</h4>
              <p>Supervisor</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="agileits_team_grid">
              <Image src={image34} alt=" " className="img-responsive" fluid />
              <h4>Thomas Carl</h4>
              <p>Supervisor</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="agileits_team_grid">
              <Image src={image35} alt=" " className="img-responsive" fluid />
              <h4>Laura Lee</h4>
              <p>CEO</p>
              <ul className="agileits_social_icons agileits_social_icons_team">
                <li>
                  <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <div className="clearfix"> </div>
        </div>
      </Container>
    </div>
  );
}

export default Team;
