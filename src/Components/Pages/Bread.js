import BannerLeft from "../BannerLeft";
import BreadBannerRight from "../BreadBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function Bread() {
  return (
    <>
      <ProductBreadCrumb text="Bread & Bakery" />
      <div className="banner">
        <BannerLeft />
        <BreadBannerRight />
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Bread;
