import React from "react";

function AddToCartProduct({
  title,
  image,
  price,
  qty,
  onIncrement,
  onDecrement,
}) {
  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ padding: 10 }}>
          <img width={75} src={image} alt="Img" />
        </div>
        <div
          style={{
            // display: "flex",
            // width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingTop: 5, fontSize: "20px" }}>{title}</div>
          <div style={{ paddingTop: 5, fontSize: "16px", fontWeight: "bold" }}>
            ₹ {price}
          </div>
          <div style={{ paddingTop: 5, fontSize: "16px" }}>qty:{qty}</div>
          <div
            style={{
              paddingTop: 5,
              display: "flex",
              gap: 10,
              padding: 5,
            }}
          >
            <button onClick={() => onIncrement()}>+</button>
            <div>{qty}</div>
            <button onClick={() => onDecrement()}>–</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToCartProduct;
