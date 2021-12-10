import React, { lazy, Suspense } from "react";
import { useParams } from "react-router";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const SingleBannerRight = lazy(() => import("../SingleBannerRight"));
const SingleBrands = lazy(() => import("../SingleBrands"));

function Single() {
  const { prodId } = useParams();
  DynamicTitle("PK Grocery | Product Details");
  return (
    <>
      <ProductBreadCrumb text="Product Details" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <SingleBannerRight prodId={prodId} />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Single;
