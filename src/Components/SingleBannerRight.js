import { Col, Row, Image } from "react-bootstrap";
import image76 from './images/76.png';

function SingleBannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <div className="w3l_banner_nav_right_banner3">
        <h3>
          Best Deals For New Products<span className="blink_me"></span>
        </h3>
      </div>
      <div className="agileinfo_single">
        <h5>charminar pulao basmati rice 5 kg</h5>
        <Row>
          <Col md={4} className="agileinfo_single_left">
            <Image
            fluid
              id="example"
              src={image76}
              alt=" "
              className="img-responsive"
            />
          </Col>
          <Col md={8} className="agileinfo_single_right">
            <div className="rating1">
              <span className="starRating">
                <input id="rating5" type="radio" name="rating" value="5" />
                <label for="rating5">5</label>
                <input id="rating4" type="radio" name="rating" value="4" />
                <label for="rating4">4</label>
                <input
                  id="rating3"
                  type="radio"
                  name="rating"
                  value="3"
                  checked
                />
                <label for="rating3">3</label>
                <input id="rating2" type="radio" name="rating" value="2" />
                <label for="rating2">2</label>
                <input id="rating1" type="radio" name="rating" value="1" />
                <label for="rating1">1</label>
              </span>
            </div>
            <div className="w3agile_description">
              <h4>Description :</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
            <div className="snipcart-item block">
              <div className="snipcart-thumb agileinfo_single_right_snipcart">
                <h4>
                  $21.00 <span>$25.00</span>
                </h4>
              </div>
              <div className="snipcart-details agileinfo_single_right_details">
                <form action="#" method="post">
                  <fieldset>
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="add" value="1" />
                    <input type="hidden" name="business" value=" " />
                    <input
                      type="hidden"
                      name="item_name"
                      value="pulao basmati rice"
                    />
                    <input type="hidden" name="amount" value="21.00" />
                    <input type="hidden" name="discount_amount" value="1.00" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="return" value=" " />
                    <input type="hidden" name="cancel_return" value=" " />
                    <input
                      type="submit"
                      name="submit"
                      value="Add to cart"
                      className="button"
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </Col>
          <div className="clearfix"> </div>
        </Row>
      </div>
    </div>
  );
}

export default SingleBannerRight;
