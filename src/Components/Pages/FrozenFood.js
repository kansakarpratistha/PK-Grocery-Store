import BannerLeft from "../BannerLeft";
import FrozenBannerRight from "../FrozenBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function FrozenFood() {
  return (
    <>
      <ProductBreadCrumb text="Frozen Food" />
      <div className="banner">
        <BannerLeft />
        <FrozenBannerRight />
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default FrozenFood;
