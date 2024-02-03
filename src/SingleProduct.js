import { useEffect } from "react";
import "./App.css";
import { useParams } from "react-router-dom";
import FormatPrice from "./helper/FormatPrice";
import { useProductContext } from "./context/ProductContext";
import MyImage from "./components/MyImage";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuReplaceAll } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();
  console.log(singleProduct);
  const { id } = useParams();
  const changeId = id.replace(":", "");


  const { name, price, company, image, description, category, stock, stars, reviews } = singleProduct;

  const API = "https://api.pujakaitem.com/api/products"

  // https://api.pujakaitem.com/api/products
  useEffect(() => {
    getSingleProduct(`${API}?id=${changeId}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading......</div>
  }
  return (
    <>
      <div className="single-page-container">
        <div className="single-page-content">
          <div className="single-page-image-container">
            <MyImage image={image} />
          </div>
          <div className="single-page-product-data">
            <h1>{name}</h1>
            <Star stars={stars} reviews={reviews} />
            <p>{category}</p>
            <p className="single-product-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="single-page-product-real-price">
              Deal of The Day:<FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="single-product-icon-box">
              <div className="single-icons">
                <CiDeliveryTruck className="single-page-icon" />
                <p>Free Delivary</p>
              </div>
              <div className="single-icons">
                <LuReplaceAll className="single-page-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="single-icons">
                <MdSecurity className="single-page-icon" />
                <p>2 year's Warrenty</p>
              </div>
            </div>
            <p>Available: <span className="single-availableity">{stock > 0 ? "In Stock" : "Out of Stock"}</span></p>
            <p>Brand:
              <span className="single-brand">{company}</span>
            </p>
            <div className="single-product-color-box">
            {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
