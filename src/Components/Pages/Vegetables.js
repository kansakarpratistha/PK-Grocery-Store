import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const VegetablesBannerRight = lazy(()=>import("../VegetablesBannerRight"));

function Vegetables() {
  DynamicTitle("PK Grocery | Fruits & Vegetables");
  return (
    <>
      <ProductBreadCrumb text="Fruits & Vegetables" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <VegetablesBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Vegetables;
