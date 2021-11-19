import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";

import ProductBreadCrumb from "../ProductsBreadCrumb";
const KitchenBannerRight = lazy(() => import("../KitchenBannerRight"));
const TopBrands = lazy(() => import("../TopBrands"));

function Kitchen() {
  DynamicTitle("PK Grocery | Kitchen");
  return (
    <>
      <ProductBreadCrumb text="Kitchen" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <KitchenBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
      <Suspense fallback={<div className="loading-el">Loading...</div>}>
        <TopBrands text="Popular Products" />
      </Suspense>
    </>
  );
}

export default Kitchen;
