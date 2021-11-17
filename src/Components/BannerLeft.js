import react from "react";
import { Navbar, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function BannerLeft() {
  return (
    <div className="w3l_banner_nav_left">
      <Navbar className="navbar-bottom" expand="lg">
        <Navbar.Toggle
          id="navbar-bottom-toggler"
          class="navbar-toggle navbar-toggle1"
        />
        <Navbar.Collapse id="bs-megadropdown-tabs">
          <div className="nav_1">
            <Nav.Link href="/products">Branded Foods</Nav.Link>
            <Nav.Link href="/household">Households</Nav.Link>

            <NavDropdown
              title="Fruits & Veggies"
              className="mega-dropdown active"
              id="fruits-veggies-dropdown"
            >
              <NavDropdown.Item
                href="/vegetables"
                className="mega-dropdown-menu w3ls_vegetables_menu"
              >
                Vegetables
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/vegetables"
                className="mega-dropdown-menu w3ls_vegetables_menu"
              >
                Fruits
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/kitchen">Kitchen</Nav.Link>
            <Nav.Link href="/shortcodes">Short Codes</Nav.Link>
            <NavDropdown
              title="Beverages"
              className="mega-dropdown"
              id="beverages-dropdown"
            >
              <NavDropdown.Item
                href="/beverages"
                className="mega-dropdown-menu w3ls_vegetables_menu"
              >
                Soft Drinks
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/beverages"
                className="mega-dropdown-menu w3ls_vegetables_menu"
              >
                Juices
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/pet">Pet Food</Nav.Link>
            <NavDropdown
              title="Frozen Foods"
              className="mega-dropdown"
              id="frozen-dropdown"
            >
              <NavDropdown.Item
                href="/frozen"
                className="mega-dropdown-menu w3ls_vegetables_menu"
              >
                Frozen Snacks
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/frozen"
                className="mega-dropdown-menu w3ls_vegetables_menu"
              >
                Frozen Nonveg
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/bread">Bread & Bakery</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
      {/* <nav class="navbar nav_bottom">
        <div class="navbar-header nav_2">
          <button
            type="button"
            class="navbar-toggle collapsed navbar-toggle1"
            data-toggle="collapse"
            data-target="#bs-megadropdown-tabs"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
          <ul class="nav navbar-nav nav_1">
            <li>
              <a href="products.html">Branded Foods</a>
            </li>
            <li>
              <a href="household.html">Households</a>
            </li>
            <li class="dropdown mega-dropdown active">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Veggies & Fruits<span class="caret"></span>
              </a>
              <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">

                <div class="w3ls_vegetables">
                  <ul>
                    <li>
                      <a href="vegetables.html">Vegetables</a>
                    </li>
                    <li>
                      <a href="vegetables.html">Fruits</a>
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
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Beverages<span class="caret"></span>
              </a>
              <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                <div class="w3ls_vegetables">
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
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Frozen Foods<span class="caret"></span>
              </a>
              <div class="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                <div class="w3ls_vegetables">
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
          </ul>
        </div>
      </nav> */}
    </div>
  );
}

export default BannerLeft;
