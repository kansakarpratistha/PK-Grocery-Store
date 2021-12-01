import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const MyProfileBannerRight = lazy(() => import("../MyProfileBannerRight"));

function MyProfile() {
  DynamicTitle("PK Grocery | My Profile");
  return (
    <>
      <ProductBreadCrumb text="My Profile" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <MyProfileBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default MyProfile;
