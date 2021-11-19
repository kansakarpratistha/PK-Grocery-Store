// import { React, lazy, Suspense } from "react";
import BannerLeft from "../BannerLeft";
// import DynamicTitle from "../DynamicTitle";
// const TopBrands = lazy(() => import("../TopBrands"));
// const FreshVegetables = lazy(() => import("../FreshVegetables"));

// const BannerRight = lazy(() => import("../BannerRight"));
// const BannerBottom = lazy(() => import("../BannerBottom"));

function Index() {
  // DynamicTitle("PK Grocery | Index");
  return (
    <>
      <div className="banner">
        <BannerLeft />
        {/* <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <BannerRight />
        </Suspense> */}
        <div className="clearfix"></div>
      </div>
      {/* <Suspense fallback={<div className="loading-el">Loading...</div>}>
        <BannerBottom />
        <TopBrands text="Top Brands" />
        <FreshVegetables />
      </Suspense> */}
    </>
  );
}

export default Index;
