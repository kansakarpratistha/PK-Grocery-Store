import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const EventsBannerRight = lazy(() => import("../EventsBannerRight"));

function Events() {
  DynamicTitle("PK Grocery | Events");
  return (
    <>
      <ProductBreadCrumb text="Events" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <EventsBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Events;
