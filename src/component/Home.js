import React, { useEffect, useState } from "react";
import ProductCard from "./common/ProductCard";
import { getAllProduct, getProductDetails } from "./utils/ApiGenerator";
import "./Home.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AddToCart, removeCartItem } from "./utils/SelectedProductSlice";

function Home() {
  const [productList, setProductList] = useState([]);

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProductList = async () => {
    const result = await getAllProduct();
    setProductList(result);
  };

  const onChangeHandler = (value) => {
    setSearchText(value);
  };

  const filterProductList = () => {
    const filterData = productList.filter((value) => {
      return value?.title?.toLowerCase().includes(searchText?.toLowerCase());
    });
    return filterData;
  };

  const onCartButtonHandler = (value) => {
    if (!value?.isCartProductAdded) {
      dispatch(AddToCart({ ...value }));
    } else {
      dispatch(removeCartItem(value.id));
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <div
        style={{
          height: "50px",
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              padding: 5,
              display: "flex",
              outline: 10,
              border: 1,
              borderColor: "black",
              borderStyle: "solid",
            }}
          >
            <input
              type="text"
              className="home_input"
              placeholder="Search Product"
              value={searchText}
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          // backgroundColor: "red",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {productList &&
          filterProductList().map((value) => {
            return (
              <div
                key={value.id}
                onClick={() => {
                  navigate("/product?id=" + value.id);
                }}
              >
                <ProductCard
                  title={value.title}
                  price={value.price}
                  description={value.description}
                  image={value.image}
                  rating={value.rating}
                  addtocartItem={value?.isCartProductAdded}
                  onButtonClick={() => onCartButtonHandler(value)}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
