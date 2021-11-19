import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

function Testimonial() {
  const mainGlide = new Glide(".glide",{
    type: 'carousel',
    gap: 0,
    autoplay: 8000
});
  useEffect(() => {
    mainGlide.mount();
    return () => mainGlide.destroy();
  }, [mainGlide]);
  return (
    <div className="testimonials">
      <Container>
        <h3>Testimonial</h3>
        <div className="w3_testimonials_grids">
          <div className="glide">
            <div className="glide__arrows" data-glide-el="controls">
              <a
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </a>
              <a
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
            <div data-glide-el="track" className="glide__track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <Row className="banner-wrap">
                    <Col md={6} className=" w3_testimonials_grid">
                      <p>
                        <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Andrew Smith <span>Customer</span>
                      </h4>
                    </Col>
                    <Col md={6} className=" w3_testimonials_grid">
                      <p>
                        <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Thomson Richard <span>Customer</span>
                      </h4>
                    </Col>
                    <div className="clearfix"></div>
                  </Row>
                </li>
                <li className="glide__slide">
                  <Row className="banner-wrap">
                    <Col md={6} className=" w3_testimonials_grid">
                      <p>
                        <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Crisp Kale <span>Customer</span>
                      </h4>
                    </Col>
                    <Col md={6} className=" w3_testimonials_grid">
                      <p>
                        <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        John Paul <span>Customer</span>
                      </h4>
                    </Col>
                    <div className="clearfix"> </div>
                  </Row>
                </li>
                <li className="glide__slide">
                  <Row className="banner-wrap">
                    <Col md={6} className=" w3_testimonials_grid">
                      <p>
                        <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Rosy Carl <span>Customer</span>
                      </h4>
                    </Col>
                    <Col md={6} className=" w3_testimonials_grid">
                      <p>
                        <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat.
                      </p>
                      <h4>
                        Rockson Doe <span>Customer</span>
                      </h4>
                    </Col>
                    <div className="clearfix"> </div>
                  </Row>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container>
        <h3>Testimonials</h3>
        <div className="w3_testimonials_grids">
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <article
                className="glide__slide"
                style={{ position: "absolute", width: "100%", opacity: "0" }}
              >
                <div className="banner-wrap">
                  <Col md={6} className=" w3_testimonials_grid">
                    <p>
                      <FontAwesomeIcon icon=="fa fa-quote-right" aria-hidden="true"></i>Itaque
                      earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                    <h4>
                      Andrew Smith <span>Customer</span>
                    </h4>
                  </div>
                  <Col md={6} className=" w3_testimonials_grid">
                    <p>
                      <FontAwesomeIcon icon=="fa fa-quote-right" aria-hidden="true"></i>Itaque
                      earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                    <h4>
                      Thomson Richard <span>Customer</span>
                    </h4>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </article>
              <article
                className="glide__slide"
                style={{ position: "absolute", width: "100%", opacity: "0" }}
              >
                <div className="banner-wrap">
                  <Col md={6} className=" w3_testimonials_grid">
                    <p>
                      <FontAwesomeIcon icon=="fa fa-quote-right" aria-hidden="true"></i>Itaque
                      earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                    <h4>
                      Crisp Kale <span>Customer</span>
                    </h4>
                  </div>
                  <Col md={6} className=" w3_testimonials_grid">
                    <p>
                      <FontAwesomeIcon icon=="fa fa-quote-right" aria-hidden="true"></i>Itaque
                      earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                    <h4>
                      John Paul <span>Customer</span>
                    </h4>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </article>
              <article
                className="glide__slide"
                style={{ position: "absolute", width: "100%", opacity: "0" }}
              >
                <div className="banner-wrap">
                  <Col md={6} className=" w3_testimonials_grid">
                    <p>
                      <FontAwesomeIcon icon=="fa fa-quote-right" aria-hidden="true"></i>Itaque
                      earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                    <h4>
                      Rosy Carl <span>Customer</span>
                    </h4>
                  </div>
                  <Col md={6} className=" w3_testimonials_grid">
                    <p>
                      <FontAwesomeIcon icon=="fa fa-quote-right" aria-hidden="true"></i>Itaque
                      earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat.
                    </p>
                    <h4>
                      Rockson Doe <span>Customer</span>
                    </h4>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </article>
            </div>
          </div>
          {/* <script src="js/jquery.wmuSlider.js"></script> 
					<script>
						$('.example1').wmuSlider();         
					</script> 
        </div>
      </Container> */}
      <link
        rel="stylesheet"
        href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
      />
      <link
        rel="stylesheet"
        href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css"
      ></link>
    </div>
  );
}

export default Testimonial;
