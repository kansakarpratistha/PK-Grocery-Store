import BannerLeft from "../BannerLeft";
import CheckoutBannerRight from "../CheckoutBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function Checkout() {
  return (
    <>
      <ProductBreadCrumb text="Checkout" />
      <div className="Banner">
        <BannerLeft />
        <CheckoutBannerRight />
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Checkout;
