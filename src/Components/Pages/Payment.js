import BannerLeft from "../BannerLeft";
import PaymentBannerRight from "../PaymentBannerRight";
import ProductBreadCrumb from "../ProductsBreadCrumb";

function Payment() {
  return (
    <>
      <ProductBreadCrumb text="Payment" />
      <div className="banner">
        <BannerLeft />
        <PaymentBannerRight />
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Payment;
