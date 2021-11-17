import react from "react";
// import './css/style.css';
import { Link } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelopeOpen,
  faCaretDown,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="agileits_header">
        <div className="w3l_offers">
          <Link to="/products">Today's special Offers</Link>
        </div>
        <div className="w3l_search">
          <form action="#" method="post">
            <input
              type="text"
              name="Product"
              value="Search a product..."
              onfocus="this.value = '';"
              onblur="if (this.value == '') {this.value = 'Search a product...';}"
              required=""
            />
            <input type="submit" value=" " />
          </form>
        </div>
        <div className="product_list_header">
          <form action="#" method="post" className="last">
            <fieldset>
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <input
                type="submit"
                name="submit"
                value="View your cart"
                className="button"
              />
            </fieldset>
          </form>
        </div>
        <div className="w3l_header_right">
          <Dropdown className="profile_details_drop">
            <Dropdown.Toggle id="profileList" aria-expanded="false">
              <FontAwesomeIcon icon={faUser} />
              <span>
                <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item id="profileList" className="drp-mnu">
                <Link to="/login">Login</Link>
              </Dropdown.Item>
              <Dropdown.Item id="profileList">
                <Link to="/login">Sign Up</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <ul>
            <li className={`profile_details_drop ${<Dropdown/>}`}>
              <Dropdown>
                <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                  <Dropdown.Toggle>
                    <FontAwesomeIcon icon={faUser} />
                    <span>
                      <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                    </span>
                  </Dropdown.Toggle>
                </Link>
                <div className="mega-dropdown-menu">
                  <div className="w3ls_vegetables">
                    <ul className="dropdown-menu drp-mnu">
                      <Dropdown.Menu className="drp-mnu">
                        <li>
                          <Link to="/login">
                            <Dropdown.Item>Login</Dropdown.Item>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Dropdown.Item>Sign Up</Dropdown.Item>
                          </Link>
                        </li>
                      </Dropdown.Menu>
                    </ul>
                  </div>
                </div>
              </Dropdown>
            </li>
          </ul> */}
        </div>
        <div className="w3l_header_right1">
          <h2>
            <Link to="/contact">Contact Us</Link>
          </h2>
        </div>
        <div className="clearfix"> </div>
      </div>

      <div className="logo_products">
        <Container>
          <div className="w3ls_logo_products_left">
            <h1>
              <Link to="/">
                <span>Grocery</span> Store
              </Link>
            </h1>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="special_items">
              <li>
                <Link to="/events">Events</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="/about">About Us</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="/products">Best Deals</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} />
                (+0123) 234 567
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:store@grocery.com">store@grocery.com</a>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
