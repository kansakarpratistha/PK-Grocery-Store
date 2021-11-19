import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import React from "react";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const PrivacyBannerRight = lazy(() => import("../PrivacyBannerRight"));

function Privacy() {
  DynamicTitle("PK Grocery | Privacy");
  return (
    <>
      <ProductBreadCrumb text="Privacy" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <PrivacyBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}
export default Privacy;
