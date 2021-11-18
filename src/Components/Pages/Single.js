import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
import SingleBannerRight from "../SingleBannerRight";
import SingleBrands from "../SingleBrands";

function Single() {
  return (
    <>
      <ProductBreadCrumb text="Single" />
      <div className="banner">
        <BannerLeft />
        <SingleBannerRight />
        <div className="clearfix"></div>
      </div>
      <SingleBrands />
    </>
  );
}

export default Single;
