import { removeListener } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCartProduct from "./common/AddToCartProduct";
import { getProductTotalAmount } from "./utils/CommonValue";
import {
  AddToCart,
  cartTotalAmountValue,
  removeCartItem,
} from "./utils/SelectedProductSlice";

function ProductCart() {
  const productcartItemslist = useSelector(
    (store) => store.AddCartProduct.cartItem
  );
  const cartTotalAmount = useSelector(
    (store) => store.AddCartProduct.cartTotalAmount
  );
  const dispatch = useDispatch();

  const onIncrementHandler = (value) => {
    const productData = productcartItemslist?.map((item) => {
      if (item.id === value.id) {
        return { ...value, qty: item?.qty + 1 };
      }
      return item;
    });
    dispatch(AddToCart(productData.filter((item) => item.id === value.id)[0]));
  };

  const onDecrementHandler = (value) => {
    if (value?.qty === 1) {
      dispatch(removeCartItem(value?.id));
      return;
    }

    const productData = productcartItemslist?.map((item) => {
      if (item.id === value.id) {
        return { ...value, qty: item?.qty - 1 };
      }
      return item;
    });
    dispatch(AddToCart(productData.filter((item) => item.id === value.id)[0]));
  };

  useEffect(() => {
    const calculatedTotal = getProductTotalAmount(productcartItemslist);
    dispatch(cartTotalAmountValue(calculatedTotal));
  }, [dispatch, productcartItemslist]);

  return (
    <div style={{ padding: 10 }}>
      {productcartItemslist &&
        productcartItemslist.map((value) => {
          return (
            <div key={value?.id}>
              <AddToCartProduct
                title={value?.title}
                price={value?.price}
                qty={value?.qty}
                image={value?.image}
                onIncrement={() => onIncrementHandler(value)}
                onDecrement={() => onDecrementHandler(value)}
              />
            </div>
          );
        })}
      {productcartItemslist?.length ? (
        <div
          style={{
            height: "100px",
            display: "flex",
            padding: 10,
          }}
        >
          <div
            style={{
              height: "80px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "5px",
              }}
            >
              <div style={{ fontSize: "20px" }}>Subtotal</div>
              <div>₹ {cartTotalAmount}</div>
            </div>
            <div style={{ paddingTop: "5px" }}>
              Taxes and shipping calculated at checkout
            </div>
            <div style={{ paddingTop: "5px" }}>
              <button
                style={{
                  height: "40px",
                  backgroundColor: "#088178",
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {!productcartItemslist?.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width={"40%"}
            src="https://static.vecteezy.com/system/resources/previews/015/277/502/original/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
            alt="No cart Product"
          />
        </div>
      )}
    </div>
  );
}

export default ProductCart;
