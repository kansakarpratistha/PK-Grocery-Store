import React from "react";
import BannerLeft from "../BannerLeft";
import MailBannerRight from "../MailBannerRight";
import ProductsBreadCrumb from "../ProductsBreadCrumb";
import Map from "../Map";

function Mail() {
  return (
    <>
      <ProductsBreadCrumb text="Mail Us" />
      <div className="banner">
        <BannerLeft />
        <MailBannerRight />
        <div className="clearfix"></div>
      </div>
      <div className="map">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d96748.15352429623!2d-74.25419879353115!3d40.731667701988506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping+mall+in+New+York%2C+NY%2C+United+States!5e0!3m2!1sen!2sin!4v1467205237951" style={{border:"0"}}></iframe> */}
        <Map/>
      </div>
    </>
  );
}

export default Mail;
