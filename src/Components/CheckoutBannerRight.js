import React from "react";
import { Table, Image, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CheckoutBannerRight() {
  const [cart, setCart] = React.useState({});
  const [cartProducts, setCartProducts] = React.useState([]);
  const accessToken = localStorage.getItem("accessToken");

  const getCart = () => {
    const url = "https://uat.ordering-boafresh.ekbana.net//api/v4/cart";
    const headers = {
      method: "GET",
      headers: {
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        Authorization: "Bearer " + accessToken,
        "Warehouse-Id": "1",
      },
    };
    const fetchCart = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 200) {
          setCart(json.data);
          setCartProducts(json.data.cartProducts);
        } else {
          throw json.errors[0];
        }
        // console.log(json.data.cartProducts);
      } catch (err) {
        console.log(err);
        alert("Failed: " + err);
      }
    };

    fetchCart();
  };

  const increaseProductQuanity = (e, cartProdId, quantity) => {
    e.preventDefault();
    const url =
      "https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product/" +
      cartProdId;
    const headers = {
      method: "PATCH",
      headers: {
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        Authorization: "Bearer " + accessToken,
        "Warehouse-Id": "1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity + 1,
      }),
    };
    const updateProduct = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 200) {
          getCart();
          alert("Cart updated!");
          const data = await json.data;
          // window.location.reload();
          return resp.status;
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        console.log("Failed: ", err);
      }
    };

    updateProduct();
  };

  const decreaseProductQuanity = (e, cartProdId, quantity) => {
    e.preventDefault();
    if (quantity === 1) {
      deleteCartProduct(e, cartProdId);
    } else {
      const url =
        "https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product/" +
        cartProdId;
      const headers = {
        method: "PATCH",
        headers: {
          "Api-key":
            "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
          Authorization: "Bearer " + accessToken,
          "Warehouse-Id": "1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: quantity - 1,
        }),
      };
      const updateProduct = async () => {
        try {
          const resp = await fetch(url, headers);
          const json = await resp.json();
          if (resp.status === 200) {
            getCart();
            alert("Cart updated!");
            const data = await json.data;
            return resp.status;
          } else {
            throw json.errors[0].message;
          }
        } catch (err) {
          console.log("Failed: ", err);
        }
      };

      updateProduct();
    }
  };

  const deleteCartProduct = (e, cartProdId) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const url =
      "https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product/" +
      cartProdId;
    const headers = {
      method: "DELETE",
      headers: {
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        Authorization: "Bearer " + accessToken,
        "Warehouse-Id": "1",
      },
    };
    const deleteProduct = async () => {
      try {
        const resp = await fetch(url, headers);

        if (resp.status === 204) {
          getCart();
          alert("Cart updated!");
          // const data = await json.data;
          return resp.status;
        } else {
          const json = await resp.json();
          throw json.errors[0].message;
        }
      } catch (err) {
        console.log("Failed: ", err);
      }
    };

    deleteProduct();
  };

  React.useEffect(() => {
    // console.log("add to cart clicked!")
    if (accessToken) {
      getCart();
    } else {
      window.location.href = "./login";
    }
  }, []);
  return (
    <div className="w3l_banner_nav_right">
      <div className="privacy about">
        <h3>
          Chec<span>kout</span>
        </h3>

        <div className="checkout-right">
          <h4>
            Your shopping cart contains:{" "}
            <span>{cartProducts.length} products</span>
          </h4>
          <Table className="timetable_sub">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Quantity</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Line Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product) => (
                <tr className="rem1">
                  <td className="invert">
                    {cartProducts.indexOf(product) + 1}
                  </td>
                  <td className="invert">
                    <div className="quantity">
                      <div className="quantity-select">
                        <div
                          className="entry value-minus"
                          onClick={(e) =>
                            decreaseProductQuanity(
                              e,
                              product.id,
                              product.quantity
                            )
                          }
                        >
                          &nbsp;
                        </div>
                        <div className="entry value">
                          <span>{product.quantity}</span>
                        </div>
                        <div
                          className="entry value-plus active"
                          onClick={(e) =>
                            increaseProductQuanity(
                              e,
                              product.id,
                              product.quantity
                            )
                          }
                        >
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="invert">{product.product.title}</td>

                  <td className="invert">
                    Rs {product.product.unitPrice[0].sellingPrice}
                  </td>
                  <td className="invert">Rs {product.price}</td>
                  <td className="invert">
                    <div className="rem">
                      <div
                        className="close1"
                        onClick={(e) => deleteCartProduct(e, product.id)}
                      >
                        {" "}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}

              {/* <tr className="rem2">
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
              </tr> */}
            </tbody>
          </Table>
        </div>
        <div className="checkout-left">
          <Row>
            <Col md={4} className="checkout-left-basket">
              <h4>Continue to basket</h4>
              <ul>
                {cartProducts.map((product) => (
                  <li>
                    {product.product.title} <i>-</i>{" "}
                    <span>Rs {product.price} </span>
                  </li>
                ))}
                <li>
                  Sub-Total <i>-</i> <span>Rs {cart.subTotal}</span>
                </li>
                <li>
                  Delivery Charge <i>-</i> <span>Rs {cart.deliveryCharge}</span>
                </li>
                <li>
                  Total <i>-</i> <span>Rs {cart.total}</span>
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
                        <Form.Label className="control-label">
                          Full name:{" "}
                        </Form.Label>
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
                            <Form.Label className="control-label">
                              Mobile number:
                            </Form.Label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Mobile number"
                            />
                          </div>
                        </div>
                        <div className="w3_agileits_card_number_grid_right">
                          <div className="controls">
                            <Form.Label className="control-label">
                              Landmark:{" "}
                            </Form.Label>
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
                        <Form.Label className="control-label">
                          Town/City:{" "}
                        </Form.Label>
                        <Form.Control
                          className="form-control"
                          type="text"
                          placeholder="Town/City"
                        />
                      </div>
                      <div className="controls">
                        <Form.Label className="control-label">
                          Address type:{" "}
                        </Form.Label>
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
