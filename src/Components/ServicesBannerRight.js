import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image18 from "./images/18.jpg";
import image19 from "./images/19.jpg";
import image20 from "./images/20.jpg";
import image4 from "./images/4.jpg";
import { Link } from "react-router-dom";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

function ServicesBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="services">
        <h3>Services</h3>
        <div className="w3ls_service_grids">
          <Row>
            <Col md={5} className="w3ls_service_grid_left">
              <h4>cum soluta nobis est</h4>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </Col>
            <Col md={7} className="w3ls_service_grid_right">
              <Row>
                <Col md={4} className="w3ls_service_grid_right_1">
                  <Image
                    src={image18}
                    fluid
                    alt=" "
                    className="img-responsive"
                  />
                </Col>
                <Col md={4} className="w3ls_service_grid_right_1">
                  <Image
                    src={image19}
                    fluid
                    alt=" "
                    className="img-responsive"
                  />
                </Col>
                <Col md={4} className="w3ls_service_grid_right_1">
                  <Image
                    src={image20}
                    fluid
                    alt=" "
                    className="img-responsive"
                  />
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
        <div className="w3ls_service_grids1">
          <Row>
            <Col md={6} className="w3ls_service_grids1_left">
              <Image src={image4} fluid alt=" " className="img-responsive" />
            </Col>
            <Col md={6} className="w3ls_service_grids1_right">
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                  />
                  et voluptates repudiandae sint et molestiae
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                  />
                  rerum necessitatibus saepe eveniet ut
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                  />
                  placeat facere possimus, omnis voluptas
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                  />
                  Et harum quidem rerum facilis est et expedita
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                  />
                  similique sunt in culpa qui officia deserunt
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className="fa fa-long-arrow-right"
                    aria-hidden="true"
                  />
                  odio dignissimos ducimus qui blanditiis
                </li>
              </ul>
              <Link to="/">Shop Now</Link>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ServicesBannerRight;
