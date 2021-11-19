import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const FrozenBannerRight = lazy(()=>import("../FrozenBannerRight"));

function FrozenFood() {
  DynamicTitle("PK Grocery | Frozen Food");
  return (
    <>
      <ProductBreadCrumb text="Frozen Food" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <FrozenBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default FrozenFood;
