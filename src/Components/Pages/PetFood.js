import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const PetBannerRight = lazy(() => import("../PetBannerRight"));

function PetFood() {
  DynamicTitle("PK Grocery | Pet Food");
  return (
    <>
      <ProductBreadCrumb text="Pet Food" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <PetBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default PetFood;
