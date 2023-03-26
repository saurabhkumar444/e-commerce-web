import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const productcartItemslist = useSelector(
    (store) => store.AddCartProduct.cartItem
  );
  return (
    <div className="header_container">
      <div className="header_logo">
        <img src={require("../../assets/logo.png")} alt="" />
      </div>
      <div className="header_nav">
        <ul className="nav">
          <li>
            <Link to="/" className="header_list">
              Home
            </Link>
          </li>

          <li>
            <Link to="/cart" className="header_list">
              <div style={{ display: "flex" }}>
                Cart
                {productcartItemslist?.length ? (
                  <div
                    style={{
                      backgroundColor: "blue",
                      borderRadius: 10,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                  >
                    {productcartItemslist?.length}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
