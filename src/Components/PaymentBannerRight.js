import { Form, Button, Row, Col, Image, Tabs, Tab } from "react-bootstrap";
import paypal from "./images/paypal.png";

function PaymentBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="privacy about">
        <h3>
          Pay<span>ment</span>
        </h3>

        <div className="checkout-right">
          <Tabs id="parentHorizontalTab" defaultActiveKey="cod">
            <Tab
              eventKey="cod"
              title="Cash on delivery (COD)"
              className="resp-tabs-container hor_1"
            >
              <div>
                <div className="vertical_post check_box_agile">
                  <h5>COD</h5>
                  <div className="checkbox">
                    <div className="check_box_one cashon_delivery">
                      <Form.Label className="anim">
                        <Form.Check
                          type="checkbox"
                          className="checkbox"
                          label="We also accept Credit/Debit card on delivery. Please
                          Check with the agent."
                        />
                      </Form.Label>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="credit"
              title="Credit/Debit"
              className="resp-tabs-container hor_1"
            >
              <div>
                <Form
                  action="#"
                  method="post"
                  className="creditly-card-form agileinfo_form"
                >
                  <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                    <div className="credit-card-wrapper">
                      <div className="first-row form-group">
                        <div className="controls">
                          <Form.Label className="control-label">
                            Name on Card
                          </Form.Label>
                          <Form.Control
                            className="billing-address-name form-control"
                            type="text"
                            name="name"
                            placeholder="John Smith"
                          />
                        </div>
                        <div className="w3_agileits_card_number_grids">
                          <div className="w3_agileits_card_number_grid_left">
                            <div className="controls">
                              <Form.Label className="control-label">
                                Card Number
                              </Form.Label>
                              <Form.Control
                                className="number credit-card-number form-control"
                                type="text"
                                name="number"
                                inputmode="numeric"
                                autocomplete="cc-number"
                                autocompletetype="cc-number"
                                x-autocompletetype="cc-number"
                                placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;"
                              />
                            </div>
                          </div>
                          <div className="w3_agileits_card_number_grid_right">
                            <div className="controls">
                              <Form.Label className="control-label">
                                CVV
                              </Form.Label>
                              <Form.Control
                                className="security-code form-control"
                                Â·
                                inputmode="numeric"
                                type="text"
                                name="security-code"
                                placeholder="&#149;&#149;&#149;"
                              />
                            </div>
                          </div>
                          <div className="clear"> </div>
                        </div>
                        <div className="controls">
                          <Form.Label className="control-label">
                            Expiration Date
                          </Form.Label>
                          <Form.Control
                            className="expiration-month-and-year form-control"
                            type="text"
                            name="expiration-month-and-year"
                            placeholder="MM / YY"
                          />
                        </div>
                      </div>
                      <Button className="submit">
                        <span>Make a payment </span>
                      </Button>
                    </div>
                  </section>
                </Form>
              </div>
            </Tab>
            <Tab
              eventKey="netbanking"
              title="Netbanking"
              className="resp-tabs-container hor_1"
            >
              <div>
                <div className="vertical_post">
                  <Form action="#" method="post">
                    <h5>Select From Popular Banks</h5>
                    <div className="swit-radio">
                      <div className="check_box_one">
                        {" "}
                        <div className="radio_one">
                          {" "}
                          <Form.Label>
                            <Form.Check type="radio" name="radio" label="Syndicate Bank" checked />
                          </Form.Label>{" "}
                        </div>
                      </div>
                      <div className="check_box_one">
                        {" "}
                        <div className="radio_one">
                          {" "}
                          <Form.Label>
                            <Form.Check type="radio" name="radio" label="Bank of Baroda"/>
                          </Form.Label>{" "}
                        </div>
                      </div>
                      <div className="check_box_one">
                        {" "}
                        <div className="radio_one">
                          {" "}
                          <Form.Label>
                            <Form.Check type="radio" name="radio" label="Canara Bank"/>
                          </Form.Label>{" "}
                        </div>
                      </div>
                      <div className="check_box_one">
                        {" "}
                        <div className="radio_one">
                          {" "}
                          <Form.Label>
                            <Form.Check type="radio" name="radio" label="ICICI Bank"/>
                          </Form.Label>{" "}
                        </div>
                      </div>
                      <div className="check_box_one">
                        {" "}
                        <div className="radio_one">
                          {" "}
                          <Form.Label>
                            <Form.Check type="radio" name="radio" label="State Bank Of India"/>
                            {/* <i></i>State Bank Of India */}
                          </Form.Label>{" "}
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <h5>Or SELECT OTHER BANK</h5>
                    <div className="section_room_pay">
                      <Form.Select className="year">
                        <option value="">=== Other Banks ===</option>
                        <option value="ALB-NA">
                          Allahabad Bank NetBanking
                        </option>
                        <option value="ADB-NA">Andhra Bank</option>
                        <option value="BBK-NA">
                          Bank of Bahrain and Kuwait NetBanking
                        </option>
                        <option value="BBC-NA">
                          Bank of Baroda Corporate NetBanking
                        </option>
                        <option value="BBR-NA">
                          Bank of Baroda Retail NetBanking
                        </option>
                        <option value="BOI-NA">Bank of India NetBanking</option>
                        <option value="BOM-NA">
                          Bank of Maharashtra NetBanking
                        </option>
                        <option value="CSB-NA">
                          Catholic Syrian Bank NetBanking
                        </option>
                        <option value="CBI-NA">Central Bank of India</option>
                        <option value="CUB-NA">
                          City Union Bank NetBanking
                        </option>
                        <option value="CRP-NA">Corporation Bank</option>
                        <option value="DBK-NA">Deutsche Bank NetBanking</option>
                        <option value="DCB-NA">Development Credit Bank</option>
                        <option value="DC2-NA">
                          Development Credit Bank - Corporate
                        </option>
                        <option value="DLB-NA">
                          Dhanlaxmi Bank NetBanking
                        </option>
                        <option value="FBK-NA">Federal Bank NetBanking</option>
                        <option value="IDS-NA">Indusind Bank NetBanking</option>
                        <option value="IOB-NA">Indian Overseas Bank</option>
                        <option value="ING-NA">
                          ING Vysya Bank (now Kotak)
                        </option>
                        <option value="JKB-NA">
                          Jammu and Kashmir NetBanking
                        </option>
                        <option value="JSB-NA">
                          Janata Sahakari Bank Limited
                        </option>
                        <option value="KBL-NA">
                          Karnataka Bank NetBanking
                        </option>
                        <option value="KVB-NA">
                          Karur Vysya Bank NetBanking
                        </option>
                        <option value="LVR-NA">
                          Lakshmi Vilas Bank NetBanking
                        </option>
                        <option value="OBC-NA">
                          Oriental Bank of Commerce NetBanking
                        </option>
                        <option value="CPN-NA">PNB Corporate NetBanking</option>
                        <option value="PNB-NA">PNB NetBanking</option>
                        <option value="RSD-DIRECT">
                          Rajasthan State Co-operative Bank-Debit Card
                        </option>
                        <option value="RBS-NA">
                          RBS (The Royal Bank of Scotland)
                        </option>
                        <option value="SWB-NA">Saraswat Bank NetBanking</option>
                        <option value="SBJ-NA">
                          SB Bikaner and Jaipur NetBanking
                        </option>
                        <option value="SBH-NA">SB Hyderabad NetBanking</option>
                        <option value="SBM-NA">SB Mysore NetBanking</option>
                        <option value="SBT-NA">SB Travancore NetBanking</option>
                        <option value="SVC-NA">
                          Shamrao Vitthal Co-operative Bank
                        </option>
                        <option value="SIB-NA">
                          South Indian Bank NetBanking
                        </option>
                        <option value="SBP-NA">
                          State Bank of Patiala NetBanking
                        </option>
                        <option value="SYD-NA">
                          Syndicate Bank NetBanking
                        </option>
                        <option value="TNC-NA">
                          Tamil Nadu State Co-operative Bank NetBanking
                        </option>
                        <option value="UCO-NA">UCO Bank NetBanking</option>
                        <option value="UBI-NA">Union Bank NetBanking</option>
                        <option value="UNI-NA">
                          United Bank of India NetBanking
                        </option>
                        <option value="VJB-NA">Vijaya Bank NetBanking</option>
                      </Form.Select>
                    </div>
                    <Form.Control type="submit" value="PAY NOW" />
                  </Form>
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="paypal"
              title="Paypal Account"
              className="resp-tabs-container hor_1"
            >
              <div>
                <div id="tab4" className="tab-grid" style={{ display: "lock" }}>
                  <Row>
                    <Col md={6}>
                      <Image
                        className="pp-img"
                        src={paypal}
                        alt="Image Alternative text"
                        title="Image Title"
                      />
                      <p>
                        Important: You will be redirected to PayPal's website to
                        securely complete your payment.
                      </p>
                    </Col>
                    <Col md={6}>
                      <Form className="cc-form">
                        <div className="clearfix">
                          <Form.Group className="form-group form-group-cc-number">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                              className="form-control"
                              placeholder="xxxx xxxx xxxx xxxx"
                              type="text"
                            />
                            <span className="cc-card-icon"></span>
                          </Form.Group>
                          <Form.Group className="form-group form-group-cc-cvc">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                              className="form-control"
                              placeholder="xxxx"
                              type="text"
                            />
                          </Form.Group>
                        </div>
                        <div className="clearfix">
                          <Form.Group className="form-group form-group-cc-name">
                            <Form.Label>Card Holder Name</Form.Label>
                            <Form.Control
                              className="form-control"
                              type="text"
                            />
                          </Form.Group>
                          <Form.Group className="form-group form-group-cc-date">
                            <Form.Label>Valid Thru</Form.Label>
                            <Form.Control
                              className="form-control"
                              placeholder="mm/yy"
                              type="text"
                            />
                          </Form.Group>
                        </div>
                        <div className="checkbox checkbox-small">
                          <Form.Label>
                            <Form.Check
                              className="i-check"
                              type="checkbox"
                              label="Add to My Cards"
                              //   checked
                            />
                          </Form.Label>
                        </div>
                        <Button
                          className="btn btn-primary submit"
                          type="submit"
                          className="submit"
                          value="Proceed Payment"
                        >
                          Proceed Payment
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
            <ul className="resp-tabs-list hor_1">
              <li>Cash on delivery (COD)</li>
              <li>Credit/Debit</li>
              <li>Netbanking</li>
              <li>Paypal Account</li>
            </ul>
            <div className="resp-tabs-container hor_1">
              
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default PaymentBannerRight;
