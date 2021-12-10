import React from "react";
import "./css/Flexslider.css";
import { CarouselItem, Collapse } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function BannerRight() {
  const [carousel, setCarousel] = React.useState([]);
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
        console.log(json.data[0].details);
        setCarousel(json.data[0].details);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w3l_banner_nav_right">
      <section className="slider">
        <div className="flexslider">
          <Carousel className="slides">
            {carousel.map((img) => (
              <Carousel.Item>
                <div
                  className="w3l_banner_nav_right_banner"
                  style={{
                    background: "url(" + img.images + ") no-repeat 0px 0px",
                  }}
                >
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
      {/* <!-- flexSlider --> */}
      <link
        rel="stylesheet"
        href="css/flexslider.css"
        type="text/css"
        media="screen"
        property=""
      />
    </div>
  );
}

export default BannerRight;
