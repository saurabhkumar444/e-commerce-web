import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./ProductCard.css";

function ProductCard({
  title,
  price,
  description,
  image,
  rating,
  onButtonClick,
  // addtocartItem = false,
}) {
  const [addtocartItem, setAddtoCartItem] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="product_card_container">
      <div className="product_image">
        <img src={image} alt="" />
        <div className="product_card_detail">
          <div className="product_title">{title}</div>
          <div className="product_description">{description}</div>
          <div
            className={`product_rating ${
              rating?.rate > 3.5 && "product_rating_green"
            }`}
          >
            <img
              height={22}
              width={22}
              src={require("../../assets/star.png")}
              alt="Star"
            />
            <span>{rating?.rate}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bottom: 0,
            }}
          >
            <div className="product_card_price">₹{price}</div>
            <button
              className={`product_card_button ${
                addtocartItem && "product_card_button_gray"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setAddtoCartItem(!addtocartItem);

                onButtonClick();
              }}
              disabled={addtocartItem}
            >
              {addtocartItem ? "Item Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
