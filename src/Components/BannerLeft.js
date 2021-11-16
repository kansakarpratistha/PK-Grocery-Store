import react from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BannerLeft() {
  return (
    <div className="w3l_banner_nav_left">
      <Navbar className="navbar nav_bottom">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <Navbar.Brand className="navbar-header nav_2">
          <Navbar.Toggle
            type={Button}
            class="navbar-toggle collapsed navbar-toggle1"
            data-toggle="collapse"
            data-target="#bs-megadropdown-tabs"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>
        </Navbar.Brand>
        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <Navbar.Collapse
          className="collapse navbar-collapse"
          id="bs-megadropdown-tabs"
        >
          <ul className="nav navbar-nav nav_1">
            <Nav>
              <li>
                <Link to="/products">Branded Foods</Link>
              </li>
              <li>
                <Link to="/household">Households</Link>
              </li>
              <li className="dropdown mega-dropdown active">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Veggies & Fruits<span class="caret"></span>
                </a>
                <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                  <div className="w3ls_vegetables">
                    <ul>
                      <li>
                        <Link to="/vegetables">Vegetables</Link>
                      </li>
                      <li>
                        <Link to="/vegetables">Fruits</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="kitchen.html">Kitchen</a>
              </li>
              <li>
                <a href="short-codes.html">Short Codes</a>
              </li>
              <li className="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Beverages<span class="caret"></span>
                </a>
                <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                  <div className="w3ls_vegetables">
                    <ul>
                      <li>
                        <a href="drinks.html">Soft Drinks</a>
                      </li>
                      <li>
                        <a href="drinks.html">Juices</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="pet.html">Pet Food</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Frozen Foods<span class="caret"></span>
                </a>
                <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                  <div className="w3ls_vegetables">
                    <ul>
                      <li>
                        <a href="frozen.html">Frozen Snacks</a>
                      </li>
                      <li>
                        <a href="frozen.html">Frozen Nonveg</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="bread.html">Bread & Bakery</a>
              </li>
            </Nav>
          </ul>
        </Navbar.Collapse>
        {/* <!-- /.navbar-collapse --> */}
      </Navbar>
    </div>
  );
}

export default BannerLeft;
