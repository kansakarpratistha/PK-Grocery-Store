import { Col, Row, Image } from "react-bootstrap";
import image13 from "./images/13.jpg";
import image20 from "./images/20.jpg";
import image15 from "./images/15.jpg";
import image22 from "./images/22.jpg";
import image23 from "./images/23.jpg";
import image24 from "./images/24.jpg";
import { Link } from "react-router-dom";

function KitchenBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="w3l_banner_nav_right_banner6">
        <h3>
          Best Deals For New Products<span className="blink_me"></span>
        </h3>
      </div>
      <div className="w3l_banner_nav_right_banner3_btm">
        <Row>
          <Col md={4} className="w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <Image src={image13} alt=" " className="img-responsive" fluid />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Utensils</h4>
            <ol>
              <li>sunt in culpa qui officia</li>
              <li>commodo consequat</li>
              <li>sed do eiusmod tempor incididunt</li>
            </ol>
          </Col>
          <Col md={4} className="w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <Image src={image20} alt=" " className="img-responsive" fluid />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Vegetables</h4>
            <ol>
              <li>dolorem eum fugiat voluptas</li>
              <li>ut aliquid ex ea commodi</li>
              <li>magnam aliquam quaerat</li>
            </ol>
          </Col>
          <Col md={4} className="w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <Image src={image15} alt=" " className="img-responsive" fluid />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Cookies</h4>
            <ol>
              <li>dolorem eum fugiat voluptas</li>
              <li>ut aliquid ex ea commodi</li>
              <li>magnam aliquam quaerat</li>
            </ol>
          </Col>
          <div className="clearfix"> </div>
        </Row>
      </div>
      <div className="w3ls_w3l_banner_nav_right_grid">
        <div className="w3ls_w3l_banner_nav_right_grid_head">
          <h6>Popular Categories</h6>
        </div>
        <div className="w3ls_w3l_banner_nav_right_grid_head_grids">
          <Row>
            <Col md={4} className="w3ls_w3l_banner_nav_right_grid_head_grid">
              <Image src={image22} alt=" " className="img-responsive" fluid />
              <h4>Bread & Bakery</h4>
              <ul>
                <li>
                  <Link to="/bread">Raising rolls</Link>
                </li>
                <li>
                  <Link to="/bread">Butter Croissants</Link>
                </li>
                <li>
                  <Link to="/bread">wheat pita</Link>
                </li>
                <li>
                  <Link to="/bread">Hot dog roll</Link>
                </li>
              </ul>
            </Col>
            <Col md={4} className="w3ls_w3l_banner_nav_right_grid_head_grid">
              <Image src={image23} alt=" " className="img-responsive" fluid />
              <h4>Beverages</h4>
              <ul>
                <li>
                  <Link to="/beverages">Juices</Link>
                </li>
                <li>
                  <Link to="/beverages">Soft Drinks</Link>
                </li>
                <li>
                  <Link to="/beverages">Energy Drinks</Link>
                </li>
              </ul>
            </Col>
            <Col md={4} className="w3ls_w3l_banner_nav_right_grid_head_grid">
              <Image src={image24} alt=" " className="img-responsive" fluid />
              <h4>Frozen Foods</h4>
              <ul>
                <li>
                  <Link to="/frozen">Frozen Snacks</Link>
                </li>
                <li>
                  <Link to="/frozen">Frozen Nonveg</Link>
                </li>
                <li>
                  <Link to="/frozen">Frozen Sweet Corn</Link>
                </li>
                <li>
                  <Link to="/frozen">Frozen Mixed Vegetable</Link>
                </li>
              </ul>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default KitchenBannerRight;
