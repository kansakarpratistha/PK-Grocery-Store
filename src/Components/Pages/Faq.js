import BannerLeft from "../BannerLeft";
import FaqBannerRight from "../FaqBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function Faq(){
    return(
        <>
        <ProductBreadCrumb text="FAQ" />
        <div className="banner">
            <BannerLeft/>
            <FaqBannerRight/>
            <div className="clearfix"></div>
        </div>
        </>
    )
}
export default Faq;