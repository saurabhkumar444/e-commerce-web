import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "./ProductDetails.css";
import { getProductDetails } from "./utils/ApiGenerator";
import { AddToCart } from "./utils/SelectedProductSlice";

function ProductDetails() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const [productDetails, setPorudctDetails] = useState([]);
  const [isProductAdded, setIsProductAdded] = useState(false);
  const dispatch = useDispatch();

  const getproductDetails = useCallback(async () => {
    const response = await getProductDetails(productId);
    // dispatch(selectedVideoData(response));
    setPorudctDetails(response);
  }, [productId]);

  const productAddedInCart = async (productDetailsValue) => {
    // if (isProductAdded) {
    dispatch(AddToCart({ ...productDetails }));
    // }
    setIsProductAdded(!isProductAdded);
  };

  useEffect(() => {
    getproductDetails();
    // dispatch(closedMenu());
  }, [productId]);

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      {productDetails && (
        <div className="product_details_container section1">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // width: "100%",
            }}
          >
            <div className="product_mainImg">
              <img
                height={500}
                width={400}
                src={productDetails?.image}
                alt="productImg"
              />
            </div>
            <div className="product_details_text product_details_right">
              {productDetails?.category}
              <div
                className="product_details_text"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                {productDetails?.title}
              </div>
              <div
                className="product_details_text"
                style={{ fontWeight: "bold", fontSize: "24px" }}
              >
                ₹ {productDetails?.price}
              </div>
              <div className="product_details_text">
                <button
                  className={`product_details_button  ${
                    isProductAdded && "product_details_button_gray"
                  }`}
                  onClick={() => {
                    productAddedInCart(productDetails);
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <div
                className="product_details_text"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                Product Details
              </div>
              <div className="product_details_text">
                {productDetails?.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
