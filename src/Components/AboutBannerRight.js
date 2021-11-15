import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import image31 from "./images/31.jpg";

function AboutBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="privacy about">
        <h3>About Us</h3>
        <p className="animi">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </p>
        <div className="agile_about_grids">
          <Row>
            <Col md={6} className="agile_about_grid_right">
              <Image src={image31} alt=" " fluid/>
            </Col>
            <Col md={6} className="agile_about_grid_left">
              <ol>
                <li>laborum et dolorum fuga</li>
                <li>corrupti quos dolores et quas</li>
                <li>est et expedita distinctio</li>
                <li>deleniti atque corrupti quos</li>
                <li>excepturi sint occaecati cupiditate</li>
                <li>accusamus et iusto odio</li>
              </ol>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AboutBannerRight;
