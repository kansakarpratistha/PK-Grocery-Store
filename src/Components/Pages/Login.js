import React from "react";
import BannerLeft from "../BannerLeft";
import LoginBannerRight from "../LoginBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";
function Login() {
  return (
    <>
      <ProductBreadCrumb text="Sign In & Sign Up" />
      <div className="banner">
        <BannerLeft />
        <LoginBannerRight />
        <div className="clearfix"></div>
      </div>
    </>
  );
}
export default Login;
