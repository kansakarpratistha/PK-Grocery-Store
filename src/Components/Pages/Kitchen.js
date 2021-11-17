import BannerLeft from "../BannerLeft";
import KitchenBannerRight from "../KitchenBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";
import TopBrands from "../TopBrands";

function Kitchen() {
  return (
    <>
      <ProductBreadCrumb text="Kitchen" />
      <div className="banner">
        <BannerLeft />
        <KitchenBannerRight />
        <div className="clearfix"></div>
      </div>
      <TopBrands text="Popular Products"/>
    </>
  );
}

export default Kitchen;
