import react from "react";
import card from "./images/card.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faDribbble,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="w3_footer_grid" md={3}>
            <h3>information</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Best Deals</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/">Short Codes</Link>
              </li>
            </ul>
          </Col>
          <Col className="w3_footer_grid" md={3}>
            <h3>policy info</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy">privacy policy</Link>
              </li>
              <li>
                <Link to="/privacy">terms of use</Link>
              </li>
            </ul>
          </Col>
          <Col className="w3_footer_grid" md={3}>
            <h3>what in stores</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="/pet">Pet Food</Link>
              </li>
              <li>
                <Link to="frozen">Frozen Snacks</Link>
              </li>
              <li>
                <Link to="/kitchen">Kitchen</Link>
              </li>
              <li>
                <Link to="/products">Branded Foods</Link>
              </li>
              <li>
                <Link to="/household">Households</Link>
              </li>
            </ul>
          </Col>
          <Col className="w3_footer_grid" col={3}>
            <h3>twitter posts</h3>
            <ul className="w3_footer_grid_list1">
              <li>
                <label>
                  <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                </label>
                <i>01 day ago</i>
                <span>
                  Non numquam <a href="#">http://sd.ds/13jklf#</a>
                  eius modi tempora incidunt ut labore et
                  <a href="#">http://sd.ds/1389kjklf#</a>quo nulla.
                </span>
              </li>
              <li>
                <label>
                  <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                </label>
                <i>02 day ago</i>
                <span>
                  Con numquam <a href="#">http://fd.uf/56hfg#</a>
                  eius modi tempora incidunt ut labore et
                  <a href="#">http://fd.uf/56hfg#</a>quo nulla.
                </span>
              </li>
            </ul>
          </Col>
        </Row>

        <div className="clearfix"> </div>
        <div className="agile_footer_grids">
          <Row>
            <Col md={3} className="w3_footer_grid agile_footer_grids_w3_footer">
              <div className="w3_footer_grid_bottom">
                <h4>100% secure payments</h4>
                <img src={card} alt=" " className="img-responsive" />
              </div>
            </Col>
            <Col md={3} className="w3_footer_grid agile_footer_grids_w3_footer">
              <div className="w3_footer_grid_bottom">
                <h5>connect with us</h5>
                <ul className="agileits_social_icons">
                  <li>
                    <a href="#" className="facebook">
                      <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="google">
                      <FontAwesomeIcon icon={faGooglePlusG} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="instagram">
                      <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dribbble">
                      <i><FontAwesomeIcon icon={faDribbble} aria-hidden="true" /></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="clearfix"> </div>
        </div>
        <div className="wthree_footer_copy">
          <p>
            © 2016 Grocery Store. All rights reserved | Design by{" "}
            <a href="http://w3layouts.com/">W3layouts</a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
