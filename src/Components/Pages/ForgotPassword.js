import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const ForgotPasswordBannerRight = lazy(() => import("../ForgotPasswordBannerRight"));
function ForgotPassword() {
  DynamicTitle("PK Grocery | Forgot Password");
  return (
    <>
      <ProductBreadCrumb text="Forgot Password" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <ForgotPasswordBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}
export default ForgotPassword;
