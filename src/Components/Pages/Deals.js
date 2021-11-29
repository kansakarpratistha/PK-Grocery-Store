import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import React from "react";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const DealsBannerRight = lazy(() => import("../DealsBannerRight"));

function Deals() {
  DynamicTitle("PK Grocery | Deals");
  return (
    <>
      <ProductBreadCrumb text="Deals" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <DealsBannerRight />
        </Suspense>
        <div className="clearfix" />
      </div>
    </>
  );
}

export default Deals;
