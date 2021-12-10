import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart } from "./CartFunctions";

function TopBrands(props) {
  const [newDishes, setNewDishes] = React.useState([]);
  const [newProducts, setNewProducts] = React.useState([]);
  const [menu, setMenu] = React.useState([]);
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
        setNewDishes(json.data[2].sectionDetails.products);
        setNewProducts(json.data[4].sectionDetails.products);
        setMenu(json.data[1].categories);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="top-brands">
      <Container>
        <h3>Enjoy Our New Dishes</h3>
        <div className="agile_top_brands_grids">
          <Row>
            {newDishes.map((product) => (
              <Col md={3} className="top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    {/* <div className="tag" style={{position: 'absolute'}}>
                    <Image fluid  src={tag} alt=" " className="img-responsive" />
                  </div> */}
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <Link to={"/single/"+product.id}>
                              <Image
                                fluid
                                title=" "
                                alt=" "
                                src={product.images[0].imageName}
                              />
                            </Link>
                            <p>{product.title}</p>
                            {/* {product.unitPrice[0].newPrice === 0 ? ( */}
                              <h4>Rs {product.unitPrice[0].sellingPrice}</h4>
                            {/* ) : (
                              <h4>
                                Rs {product.unitPrice[0].newPrice}
                                <span>
                                  Rs {product.unitPrice[0].sellingPrice}
                                </span>
                              </h4>
                            )} */}
                          </div>
                          <div className="snipcart-details top_brand_home_details">
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
          </Row>

          <div className="clearfix"> </div>
        </div>
      </Container>
      <Container>
        <h3>New Products</h3>
        <div className="agile_top_brands_grids">
          <Row>
            {newProducts.map((product) => (
              <Col md={3} className="top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    {/* <div className="tag" style={{position: 'absolute'}}>
                    <Image fluid  src={tag} alt=" " className="img-responsive" />
                  </div> */}
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <Link to={"/single/"+product.id}>
                              <Image
                                fluid
                                title=" "
                                alt=" "
                                src={product.images[0].imageName}
                              />
                            </Link>
                            <p>{product.title}</p>
                            {product.unitPrice[0].newPrice === 0 ? (
                              <h4>Rs {product.unitPrice[0].sellingPrice}</h4>
                            ) : (
                              <h4>
                                Rs {product.unitPrice[0].newPrice}
                                <span>
                                  Rs {product.unitPrice[0].sellingPrice}
                                </span>
                              </h4>
                            )}
                          </div>
                          <div className="snipcart-details top_brand_home_details">
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
          </Row>

          <div className="clearfix"> </div>
        </div>
      </Container>
      <Container>
        <h3>Our Menu</h3>
        <div className="agile_top_brands_grids">
          <Row>
            {menu.map((category) => (
              <Col md={3} className="top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    {/* <div className="tag" style={{position: 'absolute'}}>
                    <Image fluid  src={tag} alt=" " className="img-responsive" />
                  </div> */}
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <Link to={"/category/"+category.id}>
                              <Image
                                fluid
                                title=" "
                                alt=" "
                                src={category.backgroundImage}
                              />
                            </Link>
                            <p>{category.title}</p>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="clearfix"> </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBrands;
