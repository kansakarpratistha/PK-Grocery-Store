import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const HouseholdBannerRight = lazy(()=>import("../HouseholdBannerRight"));

function HouseHold() {
  DynamicTitle("PK Grocery | Household");
  return (
    <>
      <ProductBreadCrumb text="Household" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <HouseholdBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default HouseHold;
