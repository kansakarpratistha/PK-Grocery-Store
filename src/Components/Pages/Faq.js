import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const FaqBannerRight = lazy(()=>import("../FaqBannerRight"));

function Faq() {
  DynamicTitle("PK Grocery | FAQ");
  return (
    <>
      <ProductBreadCrumb text="FAQ" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <FaqBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}
export default Faq;
