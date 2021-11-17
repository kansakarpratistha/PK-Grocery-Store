import BannerLeft from "../BannerLeft";
import PetBannerRight from "../PetBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function PetFood(){
    return(
        <>
        <ProductBreadCrumb text="Pet Food" />
        <div className="banner">
            <BannerLeft/>
            <PetBannerRight/>
            <div className="clearfix"></div>
        </div>
        </>
    )
}

export default PetFood;