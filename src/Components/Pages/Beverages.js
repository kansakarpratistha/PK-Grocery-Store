import BannerLeft from "../BannerLeft";
import DynamicTitle from "../DynamicTitle";
import { lazy, Suspense } from "react";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const BeveragesBannerRight = lazy(() => import("../BeveragesBannerRight"));

function Beverages() {
  DynamicTitle("PK Grocery | Beverages");
  return (
    <>
      <ProductBreadCrumb text="Beverages" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <BeveragesBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Beverages;
