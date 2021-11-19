import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import React from "react";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const ProductsBannerRight = lazy(() => import("../ProductsBannerRight"));

function Products() {
  DynamicTitle("PK Grocery | Products");
  return (
    <>
      <ProductBreadCrumb text="Products" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <ProductsBannerRight />
        </Suspense>
        <div className="clearfix" />
      </div>
    </>
  );
}

export default Products;
