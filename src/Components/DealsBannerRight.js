import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import offer from "./images/offer.png";
import tag from "./images/tag.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";
import image9 from "./images/9.png";
import image10 from "./images/10.png";
import image11 from "./images/11.png";
import image12 from "./images/12.png";
import image13png from "./images/13.png";
import image14png from "./images/14.png";
import image15png from "./images/15.png";
import image16png from "./images/16.png";
import { Link } from "react-router-dom";

function DealsBannerRight() {
  const [products, setProducts] = React.useState([]);
  const [ads, setAds] = React.useState([]);
  React.useEffect(() => {
    const url = "https://uat.ordering-boafresh.ekbana.net/api/v4/newhome";
    const headers = {
      method: "GET",
      headers: {
        "Warehouse-id": "1",
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
      },
    };
    const fetchData = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        // console.log(json.data[7].sectionDetails.products);
        setProducts(json.data[7].sectionDetails.products);
        setAds(json.data[6].details);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w3l_banner_nav_right">
      <div className="w3l_banner_nav_right_banner3">
        <h3>
          Best Deals <span className="blink_me"></span>
        </h3>
      </div>
      <div className="w3l_banner_nav_right_banner3_btm">
        <Row>
          {ads.map((ad) => (
            <Col md={4} className="w3l_banner_nav_right_banner3_btml">
              <div className="view view-tenth">
                <Image
                  src={ad.images}
                  alt=" "
                  className="img-responsive"
                  fluid
                />
                <div className="mask">
                <h4>{ad.title}</h4>
                <p>
                  Get the best quality dishes. Healthy and tasty.
                </p>
              </div>
              </div>
              {/* <h4>Utensils</h4>
            <ol>
              <li>sunt in culpa qui officia</li>
              <li>commodo consequat</li>
              <li>sed do eiusmod tempor incididunt</li>
            </ol> */}
            </Col>
          ))}

          {/* <Col md={4} className="w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <Image src={image14} alt=" " className="img-responsive" fluid />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Hair Care</h4>
            <ol>
              <li>enim ipsam voluptatem officia</li>
              <li>tempora incidunt ut labore et</li>
              <li>vel eum iure reprehenderit</li>
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
          </Col> */}
          <div className="clearfix"> </div>
        </Row>
      </div>
      <div className="w3ls_w3l_banner_nav_right_grid">
        <h3>Today's Hot Deals</h3>
        <div className="w3ls_w3l_banner_nav_right_grid1">
          {/* <h6>food</h6> */}
          <Row>
            {products.map((product) => (
              <Col md={3} className="w3ls_w3l_banner_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    {product.hasOffer === true ? (
                      <div className="agile_top_brand_left_grid_pos">
                        <Image
                          src={offer}
                          alt=" "
                          className="img-responsive"
                          fluid
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <Link to="/">
                              <Image
                                src={product.images[0].imageName}
                                alt=" "
                                className="img-responsive"
                                fluid
                              />
                            </Link>
                            <p>{product.title}</p>
                            {product.unitPrice[0].newPrice === 0 ? (
                              <h4>Rs {product.unitPrice[0].sellingPrice}</h4>
                            ) : (
                              <h4>
                                Rs {product.unitPrice[0].newPrice}{" "}
                                <span>Rs {product.unitPrice[0].oldPrice}</span>
                              </h4>
                            )}
                          </div>
                          <div className="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="knorr instant soup"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="3.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
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
                      </figure>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            {/* <Col md={3} className="w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <Image
                      src={offer}
                      alt=" "
                      className="img-responsive"
                      fluid
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="/">
                            <Image
                              src={image5}
                              alt=" "
                              className="img-responsive"
                              fluid
                            />
                          </Link>
                          <p>knorr instant soup (100 gm)</p>
                          <h4>
                            $3.00 <span>$5.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="knorr instant soup"
                              />
                              <input type="hidden" name="amount" value="3.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
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
                    </figure>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} className="w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <Image
                      src={offer}
                      alt=" "
                      className="img-responsive"
                      fluid
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="/">
                            <Image
                              src={image6}
                              alt=" "
                              className="img-responsive"
                              fluid
                            />
                          </Link>
                          <p>chings noodles (75 gm)</p>
                          <h4>
                            $5.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="chings noodles"
                              />
                              <input type="hidden" name="amount" value="5.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
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
                    </figure>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} className="w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <Image
                      src={offer}
                      alt=" "
                      className="img-responsive"
                      fluid
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="/">
                            <Image
                              src={image7}
                              alt=" "
                              className="img-responsive"
                              fluid
                            />
                          </Link>
                          <p>lahsun sev (150 gm)</p>
                          <h4>
                            $3.00 <span>$5.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="lahsun sev"
                              />
                              <input type="hidden" name="amount" value="3.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
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
                    </figure>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} className="w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <Image
                      src={offer}
                      alt=" "
                      className="img-responsive"
                      fluid
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="/">
                            <Image
                              src={image8}
                              alt=" "
                              className="img-responsive"
                              fluid
                            />
                          </Link>
                          <p>premium bake rusk (300 gm)</p>
                          <h4>
                            $5.00 <span>$7.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="premium bake rusk"
                              />
                              <input type="hidden" name="amount" value="5.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
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
                    </figure>
                  </div>
                </div>
              </div>
            </Col> */}
            <div className="clearfix"> </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default DealsBannerRight;
