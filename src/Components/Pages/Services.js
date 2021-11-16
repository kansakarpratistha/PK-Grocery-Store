import React from "react";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
import ServicesBannerRight from "../ServicesBannerRight";
import ServicesBottom from "../ServicesBottom";

function Services() {
  return (
    <>
      <ProductBreadCrumb text="Services" />
      <div className="banner">
        <BannerLeft />
        <ServicesBannerRight />
        <div className="clearfix" />
      </div>
      <ServicesBottom />
    </>
  );
}

export default Services;
