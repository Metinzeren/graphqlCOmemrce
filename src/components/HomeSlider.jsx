import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import { Link } from "react-router-dom";
const HomeSlider = ({ products }) => {
  return (
    <div className="homeSlider">
      <div className="container uzun">
        <h3>Rasgele ürünler</h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView="auto"
        loop={true}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
      >
        {products.map((item) => {
          return (
            <SwiperSlide>
              <Link to={`/product/${item.id}`}>
                <img className="w-100 " src={item.photo} alt={item.title} />
              </Link>
              <span
                style={{ fontSize: "13px" }}
                className="d-flex justify-content-center"
              >
                {item.title}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
