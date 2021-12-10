import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import offer from "./images/offer.png";
import { addToCart, addNew, updateCart } from "./CartFunctions";

function ProductSearchBannerRight(props) {
  const [products, setProducts] = React.useState([]);
  const searchKey = props.searchKey;

  React.useEffect(() => {
    const url = "https://uat.ordering-boafresh.ekbana.net/api/v4/product";
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
        // console.log(json.data);
        const categoryProducts = json.data.filter((product) => {
          var title = product.title.toLowerCase();
          var searchArray = searchKey.split(" ");
          var reg = new RegExp("(?=.*" + searchArray.join(")(?=.*") + ")", "i"); //given words are contained in the title regardless of order

          if (reg.test(title)) {
            return product;
          }
        });
        // console.log(categoryProducts);
        setProducts(categoryProducts);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [searchKey]);

  return (
    <div className="w3l_banner_nav_right">
      <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_sub">
        <h3>Search Results For: {props.searchKey}</h3>
        <div className="w3ls_w3l_banner_nav_right_grid1">
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
                            <Link to={"/single/"+product.id}>
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

            <div className="clearfix"> </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ProductSearchBannerRight;
