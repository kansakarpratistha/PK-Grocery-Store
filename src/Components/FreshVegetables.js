import React from "react";
import image8 from "./images/8.jpg";
import image7 from "./images/7.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function FreshVegetables() {
  const [tags, setTags] = React.useState([]);
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
        // console.log(json.data[4].sectionDetails.tags)
        setTags(json.data[1].categories);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="fresh-vegetables">
      <Container>
        <h3>Buy From Our Favourite Tags</h3>
        <div className="w3l_fresh_vegetables_grids">
          <Row>
            <Col
              md={3}
              className="w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left"
            >
              <div className="w3l_fresh_vegetables_grid2">
                <ul>
                  {tags.map((tag) => (
                    <li>
                      <FontAwesomeIcon icon={faCheck} />
                      <a key={tag.id.toString()} disabled>{tag.title}</a>
                    </li>
                  ))}
                  
                </ul>
              </div>
            </Col>
            <Col md={9} className="w3l_fresh_vegetables_grid_right">
              <Row>
                <Col md={4} className="w3l_fresh_vegetables_grid">
                  <div className="w3l_fresh_vegetables_grid1">
                    <Image fluid={true} src={image8} alt=" " />
                  </div>
                </Col>
                <Col md={4} className="w3l_fresh_vegetables_grid">
                  <div className="w3l_fresh_vegetables_grid1">
                    <div className="w3l_fresh_vegetables_grid1_rel">
                      <Image fluid={true} src={image7} alt=" " />
                      <div className="w3l_fresh_vegetables_grid1_rel_pos">
                        <div className="more m1">
                          <a
                            href="products.html"
                            className="button--saqui button--round-l button--text-thick"
                            data-text="Shop now"
                          >
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w3l_fresh_vegetables_grid1_bottom">
                    <Image fluid src={image10} alt=" " />
                    <div className="w3l_fresh_vegetables_grid1_bottom_pos">
                      <h5>Special Offers</h5>
                    </div>
                  </div>
                </Col>
                <Col md={4} className="w3l_fresh_vegetables_grid">
                  <div className="w3l_fresh_vegetables_grid1">
                    <Image fluid src={image9} alt=" " />
                  </div>
                  <div className="w3l_fresh_vegetables_grid1_bottom">
                    <Image fluid src={image11} alt=" " />
                  </div>
                </Col>
              </Row>
              <div className="clearfix"> </div>
              <div className="agileinfo_move_text">
                <div className="agileinfo_marquee">
                  <h4>
                    get <span className="blink_me">25% off</span> on first order
                    and also get gift voucher
                  </h4>
                </div>
                <div className="agileinfo_breaking_news">
                  <span> </span>
                </div>
                <div className="clearfix"></div>
              </div>
            </Col>
          </Row>
          <div className="clearfix"> </div>
        </div>
      </Container>
    </div>
  );
}

export default FreshVegetables;
