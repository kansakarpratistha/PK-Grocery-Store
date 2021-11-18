import { Table, Image, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";

function CheckoutBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="privacy about">
        <h3>
          Chec<span>kout</span>
        </h3>

        <div className="checkout-right">
          <h4>
            Your shopping cart contains: <span>3 Products</span>
          </h4>
          <Table className="timetable_sub">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Product</th>
                <th>Quality</th>
                <th>Product Name</th>

                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr className="rem1">
                <td className="invert">1</td>
                <td className="invert-image">
                  <Link to="/single">
                    {" "}
                    <Image fluid src={image1} alt=" " className="img-responsive" />
                  </Link>
                </td>
                <td className="invert">
                  <div className="quantity">
                    <div className="quantity-select">
                      <div className="entry value-minus">&nbsp;</div>
                      <div className="entry value">
                        <span>1</span>
                      </div>
                      <div className="entry value-plus active">&nbsp;</div>
                    </div>
                  </div>
                </td>
                <td className="invert">Fortune Sunflower Oil</td>

                <td className="invert">$290.00</td>
                <td className="invert">
                  <div className="rem">
                    <div className="close1"> </div>
                  </div>
                </td>
              </tr>
              <tr className="rem2">
                <td className="invert">2</td>
                <td className="invert-image">
                  <Link to="/single">
                    {" "}
                    <Image fluid src={image3} alt=" " className="img-responsive" />
                  </Link>
                </td>
                <td className="invert">
                  <div className="quantity">
                    <div className="quantity-select">
                      <div className="entry value-minus">&nbsp;</div>
                      <div className="entry value">
                        <span>1</span>
                      </div>
                      <div className="entry value-plus active">&nbsp;</div>
                    </div>
                  </div>
                </td>
                <td className="invert">Basmati Rise (5 Kg)</td>

                <td className="invert">$250.00</td>
                <td className="invert">
                  <div className="rem">
                    <div className="close2"> </div>
                  </div>
                </td>
              </tr>
              <tr className="rem3">
                <td className="invert">3</td>
                <td className="invert-image">
                  <Link to="/single">
                    {" "}
                    <Image fluid src={image2} alt=" " className="img-responsive" />
                  </Link>
                </td>
                <td className="invert">
                  <div className="quantity">
                    <div className="quantity-select">
                      <div className="entry value-minus">&nbsp;</div>
                      <div className="entry value">
                        <span>1</span>
                      </div>
                      <div className="entry value-plus active">&nbsp;</div>
                    </div>
                  </div>
                </td>
                <td className="invert">Pepsi Soft Drink (2 Ltr)</td>

                <td className="invert">$15.00</td>
                <td className="invert">
                  <div className="rem">
                    <div className="close3"> </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="checkout-left">
          <Row>
            <Col md={4} className="checkout-left-basket">
              <h4>Continue to basket</h4>
              <ul>
                <li>
                  Product1 <i>-</i> <span>$15.00 </span>
                </li>
                <li>
                  Product2 <i>-</i> <span>$25.00 </span>
                </li>
                <li>
                  Product3 <i>-</i> <span>$29.00 </span>
                </li>
                <li>
                  Total Service Charges <i>-</i> <span>$15.00</span>
                </li>
                <li>
                  Total <i>-</i> <span>$84.00</span>
                </li>
              </ul>
            </Col>
            <Col md={8} className="address_form_agile">
              <h4>Add a new Details</h4>
              <Form
                action="/payment"
                method="post"
                className="creditly-card-form agileinfo_form"
              >
                <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                  <div className="information-wrapper">
                    <div className="first-row form-group">
                      <div className="controls">
                        <Form.Label className="control-label">Full name: </Form.Label>
                        <Form.Control
                          className="billing-address-name form-control"
                          type="text"
                          name="name"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="w3_agileits_card_number_grids">
                        <div className="w3_agileits_card_number_grid_left">
                          <div className="controls">
                            <Form.Label className="control-label">Mobile number:</Form.Label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Mobile number"
                            />
                          </div>
                        </div>
                        <div className="w3_agileits_card_number_grid_right">
                          <div className="controls">
                            <Form.Label className="control-label">Landmark: </Form.Label>
                            <Form.Control
                              className="form-control"
                              type="text"
                              placeholder="Landmark"
                            />
                          </div>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="controls">
                        <Form.Label className="control-label">Town/City: </Form.Label>
                        <Form.Control
                          className="form-control"
                          type="text"
                          placeholder="Town/City"
                        />
                      </div>
                      <div className="controls">
                        <Form.Label className="control-label">Address type: </Form.Label>
                        <Form.Select className="form-control option-w3ls">
                          <option>Office</option>
                          <option>Home</option>
                          <option>Commercial</option>
                        </Form.Select>
                      </div>
                    </div>
                    <Button className="submit check_out">
                      Delivery to this Address
                    </Button>
                  </div>
                </section>
              </Form>
              <div className="checkout-right-basket">
                <Link to="/payment">
                  Make a Payment{" "}
                  <span
                    className="glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </Link>
              </div>
            </Col>

            <div className="clearfix"> </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBannerRight;
