import React from "react";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
import VegetablesBannerRight from "../VegetablesBannerRight";

function Vegetables() {
  return (
    <>
      <ProductBreadCrumb text="Fruits & Vegetables" />
      <div className="banner">
        <BannerLeft />
        <VegetablesBannerRight />
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Vegetables;
