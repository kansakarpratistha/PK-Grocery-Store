import react from "react";
import "./css/Flexslider.css";
import { Collapse } from "react-bootstrap";

function BannerRight() {
  return (
    <div className="w3l_banner_nav_right">
      <section className="slider">
        <div className="flexslider">
          <ul className="slides">
            <li>
              <div className="w3l_banner_nav_right_banner">
                <h3>
                  Make your <span>food</span> with Spicy.
                </h3>
                <div className="more">
                  <a
                    href="products.html"
                    className="button--saqui button--round-l button--text-thick"
                    data-text="Shop now"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="w3l_banner_nav_right_banner1">
                <h3>
                  Make your <span>food</span> with Spicy.
                </h3>
                <div className="more">
                  <a
                    href="products.html"
                    className="button--saqui button--round-l button--text-thick"
                    data-text="Shop now"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div clasName="w3l_banner_nav_right_banner2">
                <h3>
                  upto <i>50%</i> off.
                </h3>
                <div className="more">
                  <a
                    href="products.html"
                    className="button--saqui button--round-l button--text-thick"
                    data-text="Shop now"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- flexSlider --> */}
				<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" property="" />
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
