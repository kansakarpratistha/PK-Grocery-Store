import BannerLeft from "../BannerLeft";
import DynamicTitle from "../DynamicTitle";
import ProductBreadCrumb from "../ProductsBreadCrumb";
import { lazy, Suspense } from "react";

const BreadBannerRight = lazy(()=>import("../BreadBannerRight"));

function Bread() {
  DynamicTitle("PK Grocery | Bread & Bakery");
  return (
    <>
      <ProductBreadCrumb text="Bread & Bakery" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <BreadBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Bread;
