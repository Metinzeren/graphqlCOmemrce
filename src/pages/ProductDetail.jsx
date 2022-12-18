import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../services/queries";
import { PlusIcon, DashIcon } from "@primer/octicons-react";
import { useState } from "react";
import "./ProductDetail.css";
import Comments from "../components/Comments";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/basketSlice";
import Loading from "../components/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(0);
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: {
      id,
    },
  });
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>ERROR!</div>;
  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };
  const comments = data.products_by_pk.comments;
  const { title, photo, description, price } = data.products_by_pk;

  return (
    <div className="detail">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="w-100" src={photo} alt={title} />
          </div>
          <div className="col-md-6">
            <h3>{title}</h3>
            <h4>{price}TL</h4>
            <p>{description}</p>
            <h4>
              <span>Tutar: </span>
              {price + price * amount - price} TL
            </h4>
            <div className="amount">
              {(amount !== 0 && (
                <button
                  onClick={() => setAmount(amount - 1)}
                  className="btn btn-primary btn-sm"
                >
                  <DashIcon size={16} />
                </button>
              )) || (
                <button className="btn btn-primary btn-sm">
                  <DashIcon size={16} />
                </button>
              )}

              <>{amount}</>

              <button
                onClick={() => setAmount(amount + 1)}
                className="btn btn-primary btn-sm"
              >
                <PlusIcon size={16} />
              </button>
            </div>

            <button
              //onClick={() => handleAddToCart(product)}
              style={{ marginTop: "10px" }}
              className="btn btn-primary"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
        <div className="comments">
          <div className="comments-title">
            <h3>Yorumlar</h3>
          </div>
          <Comments id={id} comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
