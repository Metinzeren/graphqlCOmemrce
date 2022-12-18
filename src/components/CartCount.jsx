import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartCount = () => {
  const { basketList } = useSelector((x) => x);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link to="/basket">
        <FaShoppingCart style={{ color: "#fff" }} />
      </Link>
      {basketList.basketList.length > 0 && (
        <div className="count">{basketList.basketList.length}</div>
      )}
    </div>
  );
};

export default CartCount;
