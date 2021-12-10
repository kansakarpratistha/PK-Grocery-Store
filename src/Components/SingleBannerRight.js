import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { addToCart } from "./CartFunctions";

function SingleBannerRight(props) {
  const [product, setProduct] = React.useState({});
  const id = props.prodId;

  React.useEffect(() => {
    const url = `https://uat.ordering-boafresh.ekbana.net/api/v4/product/${id}`;
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
        if (resp.status === 200) {
          setProduct(json.data);
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w3l_banner_nav_right">
      <div className="w3l_banner_nav_right_banner3">
        <h3>
          Best Deals For New Products<span className="blink_me"></span>
        </h3>
      </div>
      <div className="agileinfo_single">
        <h5>{product.title}</h5>
        <Row>
          <Col md={4} className="agileinfo_single_left">
            {Object.keys(product).map((key) => {
              if (key === "images") {
                return (
                  <Image
                    fluid
                    id={product.id}
                    src={product.images[0].imageName}
                    alt=" "
                    className="img-responsive"
                  />
                );
              }
            })}
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
              <h4>Category :</h4>
              <p>{product.categoryTitle}</p>
              <h4>Description :</h4>
              <p>{product.description}</p>
              <h4>Has Offer :</h4>
              <p>{product.hasOffer}</p>
            </div>
            <div className="snipcart-item block">
              <div className="snipcart-thumb agileinfo_single_right_snipcart">
                {Object.keys(product).map((key) => {
                  if (key === "unitPrice") {
                    return <h4>Rs {product.unitPrice[0].sellingPrice}</h4>;
                  }
                })}
              </div>
              <div className="snipcart-details agileinfo_single_right_details">
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
          </Col>
          <div className="clearfix"> </div>
        </Row>
      </div>
    </div>
  );
}

export default SingleBannerRight;
