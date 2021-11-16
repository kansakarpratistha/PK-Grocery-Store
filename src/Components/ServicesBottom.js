import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faChartBar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

function ServicesBottom() {
  return (
    <>
      <div className="services-bottom">
        <Container>
          <Row>
            <Col md={3} className="about_counter_left">
              <i className="glyphicon glyphicon-user" aria-hidden="true"></i>
              <p className="counter">89,147</p>
              <h3>Followers</h3>
            </Col>
            <Col md={3} className="about_counter_left">
              <i
                className="glyphicon glyphicon-piggy-bank"
                aria-hidden="true"
              ></i>
              <p className="counter">54,598</p>
              <h3>Savings</h3>
            </Col>
            <Col md={3} className="about_counter_left">
              <i className="glyphicon glyphicon-export" aria-hidden="true"></i>
              <p className="counter">83,983</p>
              <h3>Support</h3>
            </Col>
            <Col md={3} className="about_counter_left">
              <i
                className="glyphicon glyphicon-bullhorn"
                aria-hidden="true"
              ></i>
              <p className="counter">45,894</p>
              <h3>Popularity</h3>
            </Col>
            <div className="clearfix"> </div>
          </Row>
          {/* <!-- Stats-Number-Scroller-Animation-JavaScript -->
				<script src="js/waypoints.min.js"></script> 
				<script src="js/counterup.min.js"></script> 
				<script>
					jQuery(document).ready(function( $ ) {
						$('.counter').counterUp({
							delay: 10,
							time: 1000
						});
					});
				</script>
			<!-- //Stats-Number-Scroller-Animation-JavaScript --> */}
        </Container>
      </div>
      <div className="newsletter-top-serv-btm">
        <Container>
          <Row>
            <Col md={4} className="wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fa fa-shopping-cart"
                  aria-hidden="true"
                />
              </div>
              <h3>Nam libero tempore</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </Col>
            <Col md={4} className="wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="fa fa-bar-chart"
                  aria-hidden="true"
                />
              </div>
              <h3>officiis debitis aut rerum</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </Col>
            <Col md={4} className="wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="fa fa-truck"
                  aria-hidden="true"
                />
              </div>
              <h3>eveniet ut et voluptates</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ServicesBottom;
