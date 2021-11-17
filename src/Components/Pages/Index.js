import React from "react";
import BannerLeft from "../BannerLeft";
import BannerRight from "../BannerRight";
import BannerBottom from "../BannerBottom";
import TopBrands from "../TopBrands";
import FreshVegetables from "../FreshVegetables";

function Index(){
    return(
        <>
        <div className="banner">
            <BannerLeft/>
            <BannerRight/>
            <div className="clearfix"></div>
        </div>
        <BannerBottom/>
        <TopBrands text="Top Brands" />
        <FreshVegetables/>
        </>
        
    );
}

export default Index;