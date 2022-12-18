import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCart,
  increaseCart,
  removeToCart,
} from "../redux/slices/basketSlice";
import "./Basket.css";

const Basket = () => {
  const { basketList } = useSelector((x) => x);
  const dispatch = useDispatch();

  const total = basketList.basketList.reduce(
    (a, b) => (a += b.basketCount * b.price),
    0
  );

  return (
    <div className="basket">
      <div className="container">
        <div className="row">
          {basketList.basketList.length > 0 && (
            <div className="basket-title">
              <h3>Sepetim</h3>
              <span>({basketList.basketList.length} ürün)</span>
            </div>
          )}

          {(basketList.basketList.length !== 0 &&
            basketList.basketList.map((item) => {
              return (
                <div key={item.id}>
                  <div className="basket-list">
                    <div className="col-md-2">
                      <img width={100} height={100} src={item.photo} alt="" />
                    </div>

                    <div className="col-md-9 basket-list-title">
                      <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
                      <span style={{ fontSize: "13px" }}>
                        {item.short_description}
                      </span>
                      <p style={{ fontSize: "20px", fontWeight: "700" }}>
                        {item.price * item.basketCount} TL
                      </p>
                      <button onClick={() => dispatch(removeToCart(item.id))}>
                        Sepetten Sil
                      </button>
                    </div>
                    <div className="col-md-1 basket-list-right">
                      <button
                        onClick={() => dispatch(increaseCart(item.id))}
                        className="basket-button"
                      >
                        <FaPlus />
                      </button>
                      <span style={{ fontSize: "19px" }}>
                        {item.basketCount}
                      </span>
                      <button
                        onClick={() => dispatch(decreaseCart(item.id))}
                        className="basket-button"
                      >
                        <FaMinus />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })) || (
            <div className="empty">
              <h1>
                <strong>Sepette</strong> ürün yok! <strong>Ana sayafaya</strong>{" "}
                dönüp ekleyebilirsin...
              </h1>
            </div>
          )}
        </div>
        {basketList.basketList.length > 0 && (
          <div className="total">
            <h3>Toplam Bedel: {total} TL</h3>
            <button>Alışverişi Tamamla</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
