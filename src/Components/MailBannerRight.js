import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

function MailBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="mail">
        <h3>Mail Us</h3>
        <div className="agileinfo_mail_grids">
          <Row>
            <Col md={4} className="agileinfo_mail_grid_left">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHome} aria-hidden="true" />
                </li>
                <li>
                  address<span>868 1st Avenue NYC.</span>
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                </li>
                <li>
                  email
                  <span>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                </li>
                <li>
                  call to us<span>(+123) 233 2362 826</span>
                </li>
              </ul>
            </Col>
            <Col md={8} className="agileinfo_mail_grid_right">
              <form action="#" method="post">
                <Row>
                  <Col md={6} className="wthree_contact_left_grid">
                    <input
                      type="text"
                      name="Name"
                      value="Name*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Name*';}"
                      required=""
                    />
                    <input
                      type="email"
                      name="Email"
                      value="Email*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Email*';}"
                      required=""
                    />
                  </Col>
                  <Col md={6} className="wthree_contact_left_grid">
                    <input
                      type="text"
                      name="Telephone"
                      value="Telephone*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Telephone*';}"
                      required=""
                    />
                    <input
                      type="text"
                      name="Subject"
                      value="Subject*"
                      onfocus="this.value = '';"
                      onblur="if (this.value == '') {this.value = 'Subject*';}"
                      required=""
                    />
                  </Col>
                  <div className="clearfix"> </div>
                </Row>
                <Row>
                  <textarea
                    name="Message"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Message...';}"
                    required=""
                  >
                    Message...
                  </textarea>
                </Row>
                <Row>
                  <input type="submit" value="Submit" />
                  <input type="reset" value="Clear" />
                </Row>
              </form>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MailBannerRight;
