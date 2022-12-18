import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../redux/slices/basketSlice";
import "./Card.css";
const Card = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Ürün sepete eklendi!");
  };

  return (
    <div className="cardAll">
      <div className="cart">
        <div className="card-up">
          <Link to={`/product/${product.id}`}>
            <img src={product.photo} alt="" />
          </Link>
        </div>
        <div className="card-down">
          <div className="card-price">
            <p>{product.title}</p>
            <p>{product.price}₺</p>
          </div>

          <div className="card-act">
            <Link to={`/product/${product.id}`}>
              <button className="btn btn-outline-primary btn-sm">
                Ürün Detayı
              </button>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-outline-primary btn-sm"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
