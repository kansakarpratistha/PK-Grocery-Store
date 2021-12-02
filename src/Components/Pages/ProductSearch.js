import React, { lazy, Suspense } from "react";
import { useParams } from "react-router";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const ProductSearchBannerRight = lazy(() => import("../ProductSearchBannerRight"));

function ProductSearch(props) {
  const { searchKey } = useParams();
  DynamicTitle("PK Grocery | " + searchKey);
  return (
    <>
      <ProductBreadCrumb text={`Search for: ${searchKey}`} />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <ProductSearchBannerRight searchKey={searchKey} />
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default ProductSearch;
