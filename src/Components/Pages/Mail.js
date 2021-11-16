import React from "react";
import BannerLeft from "../BannerLeft";
import MailBannerRight from "../MailBannerRight";
import ProductsBreadCrumb from "../ProductsBreadCrumb";

function Mail() {
  return (
    <>
      <ProductsBreadCrumb text="Mail Us" />
      <div className="banner">
        <BannerLeft />
        <MailBannerRight />
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Mail;
