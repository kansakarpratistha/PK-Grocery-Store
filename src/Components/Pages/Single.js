import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const SingleBannerRight = lazy(() => import("../SingleBannerRight"));
const SingleBrands = lazy(() => import("../SingleBrands"));

function Single() {
  DynamicTitle("PK Grocery | Single");
  return (
    <>
      <ProductBreadCrumb text="Single" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <SingleBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
      <Suspense fallback={<div className="loading-el">Loading...</div>}>
        <SingleBrands />
      </Suspense>
    </>
  );
}

export default Single;
