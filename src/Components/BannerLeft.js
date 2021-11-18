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
      
    </div>
  );
}

export default BannerLeft;
