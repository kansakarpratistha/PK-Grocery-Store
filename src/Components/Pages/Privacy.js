import React from "react";
import BannerLeft from "../BannerLeft";
import PrivacyBannerRight from "../PrivacyBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function Privacy(){
    return(
        <>
        <ProductBreadCrumb/>
        <div className='banner'>
            <BannerLeft/>
            <PrivacyBannerRight/>
            <div className='clearfix'></div>
        </div>
        </>
    )
}
export default Privacy;