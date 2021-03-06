import React from "react";
import { Navbar, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function BannerLeft() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    const url = "https://uat.ordering-boafresh.ekbana.net/api/v4/category";
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
        setCategories(json.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w3l_banner_nav_left">
      <Navbar className="navbar-bottom" expand="lg">
        <Navbar.Toggle
          id="navbar-bottom-toggler"
          class="navbar-toggle navbar-toggle1"
        />
        <Navbar.Collapse id="bs-megadropdown-tabs">
          <div className="nav_1">
            {categories.map((category) => {
              //if category doesn't have subcategory show in nav link else in dropdown
              if (category.subcategories.length === 0) {
                return <Nav.Link href={"/category/"+category.id} key={category.id}>{category.title}</Nav.Link>;
              } else {
                return (
                  <NavDropdown
                    title={category.title}
                    className="mega-dropdown active"
                    key={category.id}
                  >
                    {/* iterate through the list of subcategories to display in dropdown item */}
                    {category.subcategories.map((subCat) => (
                      <NavDropdown.Item
                        href={"/category/"+subCat.id}
                        className="mega-dropdown-menu w3ls_vegetables_menu"
                        key={subCat.id}
                      >
                        {subCat.title}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              }
            })}
            
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default BannerLeft;
