import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductsBreadCrumb from "../ProductsBreadCrumb";
const MailBannerRight = lazy(() => import("../MailBannerRight"));
const Map = lazy(() => import("../Map"));

function Mail() {
  DynamicTitle("PK Grocery | Mail Us");
  return (
    <>
      <ProductsBreadCrumb text="Mail Us" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <MailBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
      <div className="map">
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <Map />
        </Suspense>
      </div>
    </>
  );
}

export default Mail;
