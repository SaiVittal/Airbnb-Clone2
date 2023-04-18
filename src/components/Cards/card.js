import React from "react";
import "./styles.css";
import hotel from "../../assets/hotels/hotel-1.jpeg";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { grey } from "@mui/material/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Card({ card }) {
  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{card.rating}</p>
        </div>
      </div>

      <p className="" style={{ margin: 0, color: "#717171" }}>
        {card.desc}
      </p>
      <p
        className=""
        style={{ margin: "0.2rem", fontSize: "1rem", color: "#717171" }}
      >
        {card.date}
      </p>
      <p className="" style={{ margin: 0, color: "#000" }}>
        <span style={{ fontWeight: "600" }}>₹{card.price}</span>night
      </p>
    </div>
  );
}

export default Card;
