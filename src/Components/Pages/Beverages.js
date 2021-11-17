import BannerLeft from "../BannerLeft";
import BeveragesBannerRight from "../BeveragesBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function Beverages(){
    return(
        <>
        <ProductBreadCrumb text="Beverages" />
        <div className="banner">
            <BannerLeft/>
            <BeveragesBannerRight/>
            <div className="clearfix"></div>
        </div>
        </>
    )
}

export default Beverages;