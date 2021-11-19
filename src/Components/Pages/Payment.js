import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const PaymentBannerRight = lazy(() => import("../PaymentBannerRight"));

function Payment() {
  DynamicTitle("PK Grocery | Payment");
  return (
    <>
      <ProductBreadCrumb text="Payment" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <PaymentBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Payment;
