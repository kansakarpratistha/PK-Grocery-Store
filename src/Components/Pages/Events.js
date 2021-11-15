import React from "react";
import BannerLeft from "../BannerLeft";
import EventsBannerRight from "../EventsBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function Events(){
    return(
        <>
        <ProductBreadCrumb text="Events" />
        <div className="banner">
            <BannerLeft/>
            <EventsBannerRight />
            <div className="clearfix"></div>
        </div>
        </>
    )
}

export default Events;