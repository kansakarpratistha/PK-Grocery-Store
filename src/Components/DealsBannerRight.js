import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import offer from "./images/offer.png";
import { Link } from "react-router-dom";
import { addToCart, addNew, updateCart } from "./CartFunctions";

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
        setProducts(json.data[6].sectionDetails.products);
        setAds(json.data[5].details);
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
                  <p>Get the best quality dishes. Healthy and tasty.</p>
                </div>
              </div>
            </Col>
          ))}

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
                            <Link to={"/single/" + product.id}>
                              <Image
                                src={product.images[0].imageName}
                                alt=" "
                                className="img-responsive"
                                fluid
                              />
                            </Link>
                            <p>{product.title}</p>
                            {/* {product.unitPrice[0].newPrice === 0 ? ( */}
                            <h4>Rs {product.unitPrice[0].sellingPrice}</h4>
                            {/* ) : (
                              <h4>
                                Rs {product.unitPrice[0].newPrice}{" "}
                                <span>Rs {product.unitPrice[0].oldPrice}</span>
                              </h4>
                            )} */}
                          </div>
                          <div className="snipcart-details">
                            <form onSubmit={(e) => addToCart(e, product.id)}>
                              <fieldset>
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
