import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const ServicesBannerRight = lazy(()=>import("../ServicesBannerRight"));
const ServicesBottom = lazy(()=>import("../ServicesBottom"));

function Services() {
  DynamicTitle("PK Grocery | Services");
  return (
    <>
      <ProductBreadCrumb text="Services" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <ServicesBannerRight />
        </Suspense>
        <div className="clearfix" />
      </div>
      <Suspense fallback={<div className="loading-el">Loading...</div>}>
        <ServicesBottom />
      </Suspense>
    </>
  );
}

export default Services;
