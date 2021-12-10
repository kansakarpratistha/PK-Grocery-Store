import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import offer from "./images/offer.png";
import { addToCart, addNew, updateCart } from "./CartFunctions";

function ProductsBannerRight(props) {
  const [banner, setBanner] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const id = props.categoryId;

  // const [carousel, setCarousel] = React.useState([]);
  React.useEffect(() => {
    const url =
      "https://uat.ordering-boafresh.ekbana.net/api/v4/category/" + id;
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
        // setCategory(json.data);
        console.log(json.data.backgroundImage);
        setBanner(json.data.icon);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [id]);

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
        const categoryProducts = json.data.filter(
          (product) => product.categoryId.toString() === id
        );
        // console.log(categoryProducts);
        setProducts(categoryProducts);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w3l_banner_nav_right">
      <div
        className="w3l_banner_nav_right_banner4"
        style={{ background: "url(" + banner + ") no-repeat 0px 0px" }}
      >
        <h3>
          {props.categoryTitle}
          <span className="blink_me"></span>
        </h3>
      </div>
      <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_sub">
        <h3>{props.categoryTitle}</h3>
        <div className="w3ls_w3l_banner_nav_right_grid1">
          <Row>
            {products.map((product) => (
              <Col md={3} className="w3ls_w3l_banner_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    {product.hasOffer === true ? (
                      <div className="agile_top_brand_left_grid_pos">
                        {/* <h2>Has offer</h2> */}
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

export default ProductsBannerRight;
