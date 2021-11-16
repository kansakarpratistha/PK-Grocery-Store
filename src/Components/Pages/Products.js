import React from "react";
import BannerLeft from "../BannerLeft";
import ProductsBannerRight from "../ProductsBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function Products(){
    return(
        <>
        <ProductBreadCrumb text="Products"/>
        <div className='banner'>
            <BannerLeft/>
            <ProductsBannerRight/>
            <div className='clearfix'/>
        </div>
        </>
    );
}

export default Products;