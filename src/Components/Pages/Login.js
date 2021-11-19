import { lazy, Suspense } from "react";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const LoginBannerRight = lazy(() => import("../LoginBannerRight"));
function Login() {
  DynamicTitle("PK Grocery | Sign In & Sign Up");
  return (
    <>
      <ProductBreadCrumb text="Sign In & Sign Up" />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <LoginBannerRight />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}
export default Login;
