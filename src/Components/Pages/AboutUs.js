import React from "react";
import ProductBreadCrumb from "../ProductsBreadCrumb";
import BannerLeft from "../BannerLeft";
import AboutBannerRight from "../AboutBannerRight";
import Team from "../Team";
import Testimonial from "../Testimonials";

function AboutUs(props){
    return(
        <>
            <ProductBreadCrumb text="About Us"/>
            <div className='banner'>
                <BannerLeft />
                <AboutBannerRight />
                <div className="clearfix" />
            </div>
            <Team/>
            <Testimonial/>
        </>
    )
}

export default AboutUs;