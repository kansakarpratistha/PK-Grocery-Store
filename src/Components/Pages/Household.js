import React from "react";
import HouseholdBannerRight from "../HouseholdBannerRight";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function HouseHold() {
  return (
    <>
      <ProductBreadCrumb text="Household" />
      <div className="banner">
        <BannerLeft />
        <HouseholdBannerRight />
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default HouseHold;
