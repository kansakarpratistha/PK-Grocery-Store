import { React, lazy, Suspense } from "react";
import ProductBreadCrumb from "../ProductsBreadCrumb";
import BannerLeft from "../BannerLeft";
import DynamicTitle from "../DynamicTitle";

const AboutBannerRight = lazy(() => import("../AboutBannerRight"));
const Team = lazy(() => import("../Team"));
const Testimonial = lazy(() => import("../Testimonials"));

function AboutUs(props) {
  DynamicTitle("PK Grocery | About Us");
  return (
    <>
      <ProductBreadCrumb text="About Us" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <AboutBannerRight />
        </Suspense>
        <div className="clearfix" />
      </div>
      <Suspense fallback={<div className="loading-el">Loading...</div>}>
        <Team />
        <Testimonial />
      </Suspense>
    </>
  );
}

export default AboutUs;
