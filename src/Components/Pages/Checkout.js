import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";

import ProductBreadCrumb from "../ProductsBreadCrumb";

const CheckoutBannerRight = lazy(() => import("../CheckoutBannerRight"));

function Checkout() {
  DynamicTitle("PK Grocery | Checkout");
  return (
    <>
      <ProductBreadCrumb text="Checkout" />
      <div className="Banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <CheckoutBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Checkout;
