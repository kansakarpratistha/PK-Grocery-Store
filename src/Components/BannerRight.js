import react from "react";
import "./css/Flexslider.css";
import { CarouselItem, Collapse } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function BannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <section className="slider">
        <div className="flexslider">
          <Carousel className="slides">
            <Carousel.Item>
              <div className="w3l_banner_nav_right_banner">
                <h3>
                  Make your <span>food</span> with Spicy.
                </h3>
                <div className="more">
                  <Link
                    to="/products"
                    className="button--saqui button--round-l button--text-thick"
                    data-text="Shop now"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="w3l_banner_nav_right_banner1">
                <h3>
                  Make your <span>food</span> with Spicy.
                </h3>
                <div className="more">
                  <Link
                    to="/products"
                    className="button--saqui button--round-l button--text-thick"
                    data-text="Shop now"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="w3l_banner_nav_right_banner2">
                <h3>
                  upto <i>50%</i> off.
                </h3>

                <div className="more">
                  <Link
                    to="/products"
                    className="button--saqui button--round-l button--text-thick"
                    data-text="Shop now"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </Carousel.Item>
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
      {/* <script defer src="js/jquery.flexslider.js"></script>
				<script type="text/javascript">
				$(window).load(function(){
				  $('.flexslider').flexslider({
					animation: "slide",
					start: function(slider){
					  $('body').removeClass('loading');
					}
				  });
				});
			  </script> */}
      {/* <!-- //flexSlider --> */}
    </div>
  );
}

export default BannerRight;
