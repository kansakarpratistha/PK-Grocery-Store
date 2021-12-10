import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCaretDown,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [searchKey, setSearchKey] = useState("");
  let token = localStorage.getItem("accessToken");

  const searchProducts=(evt)=>{
    evt.preventDefault();
    window.location.href = '/product-search/'+searchKey;
  }
  

  return (
    <>
      <div className="agileits_header">
        <div className="w3l_offers">
          <Link to="/deals">Today's special Offers</Link>
        </div>
        <div className="w3l_search">
          <form onSubmit={searchProducts}>
            <input
              type="text"
              name="Product"
              placeholder="Search a product..."
              required=""
              onChange={(e)=>setSearchKey(e.target.value)}
            />
            <input type="submit" value=" " />
          </form>
        </div>
        <div className="product_list_header">
          <form action="#" className="last">
            <fieldset>
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <Link to="/checkout">
                <input
                  type="submit"
                  name="submit"
                  value="View your cart"
                  className="button"
                />
              </Link>
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
              {token ? (
                <>
                  <Dropdown.Item id="profileList" className="drp-mnu">
                    <Link to="/myProfile">My Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="profileList" className="drp-mnu">
                    <Link to="/logout">Logout</Link>
                  </Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item id="profileList" className="drp-mnu">
                    <Link to="/login">Login</Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="profileList" className="drp-mnu">
                    <Link to="/login">Sign Up</Link>
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
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
                <Link to="/deals">Best Deals</Link>
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
