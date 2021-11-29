import React, { lazy, Suspense } from "react";
import { useParams } from "react-router";
import DynamicTitle from "../DynamicTitle";
import BannerLeft from "../BannerLeft";
import ProductBreadCrumb from "../ProductsBreadCrumb";
const ProductsBannerRight = lazy(() => import("../ProductsBannerRight"));

function Products(props) {
  const [category, setCategory] = React.useState({});
  const [banner, setBanner] = React.useState("");
  const { id } = useParams();

  // const [carousel, setCarousel] = React.useState([]);
  React.useEffect(() => {
    const url = "https://uat.ordering-boafresh.ekbana.net/api/v4/category/"+id;
    const headers = {
      method: "GET",
      headers: {
        "Warehouse-id": "1",
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
      },
    };
    const fetchData = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        console.log(json.data);
        setCategory(json.data);
        setBanner(json.data.backgroundImage);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, []);

  // console.log(id)
  DynamicTitle("PK Grocery | "+category.title);
  return (
    <>
      {/* <h1>{category.title}</h1> */}
      <ProductBreadCrumb text={category.title} />
      <div className="banner">
        <BannerLeft />
        <Suspense fallback={<div className="loading-el">Loading...</div>}>
          <ProductsBannerRight categoryTitle={category.title} categoryId={id}/>
        </Suspense>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Products;
