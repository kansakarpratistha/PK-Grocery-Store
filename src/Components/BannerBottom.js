import React from "react";
import { Col, Row, Image } from "react-bootstrap";

function BannerBottom() {
  const [ads, setAds] = React.useState([]);
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
        setAds(json.data[6].details);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="banner_bottom">
      <div className="wthree_banner_bottom_left_grid_sub"></div>
      <div className="wthree_banner_bottom_left_grid_sub1">
        <Row>
          {ads.map((ad)=>(
            <Col md={4} className="wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <Image fluid src={ad.images} alt=" " className="img-responsive" />
            </div>
          </Col>
          ))}
        </Row>
        <div className="clearfix"> </div>
      </div>
      <div className="clearfix"> </div>
    </div>
  );
}

export default BannerBottom;
