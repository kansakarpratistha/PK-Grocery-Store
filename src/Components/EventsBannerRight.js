import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faBullseye,
  faCreditCard,
  faEye,
  faCog,
  faTrophy,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import image15 from "./images/15.jpg";
import image19 from "./images/19.jpg";

function EventsBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="events">
        <h3>Events</h3>
        <div className="w3agile_event_grids">
          <Row>
            <Col md={6} className="w3agile_event_grid">
              <Row>
                <Col md={3} className="col-md-3 w3agile_event_grid_left">
                  <FontAwesomeIcon
                    icon={faBullhorn}
                    className="fa fa-bullhorn"
                    aria-hidden="true"
                  />
                </Col>
                <Col md={9} className="w3agile_event_grid_right">
                  <h4>cum soluta nobis eligendi</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus.
                  </p>
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <Col md={6} className="w3agile_event_grid">
              <Row>
                <Col md={3} className="w3agile_event_grid_left">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    className="fa fa-bullseye"
                    aria-hidden="true"
                  />
                </Col>
                <Col md={9} className="w3agile_event_grid_right">
                  <h4>rerum hic tenetur a sapiente</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus.
                  </p>
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
        <div className="w3agile_event_grids">
          <Row>
            <Col md={6} className="w3agile_event_grid">
              <Row>
                <Col md={3} className="w3agile_event_grid_left">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="fa fa-credit-card"
                    aria-hidden="true"
                  />
                </Col>
                <Col md={9} className="w3agile_event_grid_right">
                  <h4>earum rerum tenetur sapiente</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus.
                  </p>
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <Col md={6} className="w3agile_event_grid">
              <Row>
                <Col md={3} className="w3agile_event_grid_left">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="fa fa-eye"
                    aria-hidden="true"
                  />
                </Col>
                <Col md={9} className="w3agile_event_grid_right">
                  <h4>quibu aut officiis debitis</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus.
                  </p>
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
        <div className="w3agile_event_grids">
          <Row>
            <Col md={6} className="w3agile_event_grid">
              <Row>
                <Col md={3} className="w3agile_event_grid_left">
                  <FontAwesomeIcon
                    icon={faCog}
                    className="fa fa-cog"
                    aria-hidden="true"
                  />
                </Col>
                <Col md={9} className="w3agile_event_grid_right">
                  <h4>necessitatibus saepe eveniet</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus.
                  </p>
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <Col md={6} className="w3agile_event_grid">
              <Row>
                <Col md={3} className="w3agile_event_grid_left">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="fa fa-trophy"
                    aria-hidden="true"
                  />
                </Col>
                <Col md={9} className="w3agile_event_grid_right">
                  <h4>repudiandae sint et molestiae</h4>
                  <p>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus.
                  </p>
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
        <div className="events-bottom">
          <Row>
            <Col md={6} className="events_bottom_left">
              <Row>
                <Col md={4} className="events_bottom_left1">
                  <div className="events_bottom_left1_grid">
                    <h4>20</h4>
                    <p>July, 2016</p>
                  </div>
                </Col>
                <Col md={8} className="events_bottom_left2">
                  <Image
                    src={image15}
                    alt=" "
                    className="img-responsive"
                    fluid
                  />
                  <h4>ut aut reiciendis facere possimus</h4>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faClock}
                        className="fa fa-clock-o"
                        aria-hidden="true"
                      />
                      3:00 PM
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="fa fa-user"
                        aria-hidden="true"
                      />
                      <a href="#">Admin</a>
                    </li>
                  </ul>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est.
                  </p>
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <Col md={6} className="events_bottom_left">
              <Row>
                <Col md={4} className="events_bottom_left1">
                  <div className="events_bottom_left1_grid">
                    <h4>21</h4>
                    <p>July, 2016</p>
                  </div>
                </Col>
                <Col md={8} className="events_bottom_left2">
                  <Image
                    src={image19}
                    alt=" "
                    className="img-responsive"
                    fluid
                  />
                  <h4>maxime placeat facere possimus</h4>
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faClock}
                        className="fa fa-clock-o"
                        aria-hidden="true"
                      />
                      3:30 PM
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="fa fa-user"
                        aria-hidden="true"
                      />
                      <a href="#">Admin</a>
                    </li>
                  </ul>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est.
                  </p>
                </Col>
                <div className="clearfix"> </div>
              </Row>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default EventsBannerRight;
