import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pgCard from "../assets/rentCard.jpg";
import pgCard2 from "../assets/rentCard.webp";
import smCard from "../assets/studyMaterialCard.jpg";
import libCard from "../assets/libCard.jpg";
import foodCard from "../assets/foodCard.jpg";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./SwiperStyle.css";

import { EffectCube, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card" id="card1">
            <img src={pgCard2} alt="Image1" />
            <h2>PG/Rooms</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" id="card1">
            <img src={foodCard} alt="Image1" />
            <h2>Tiffin Service</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" id="card1">
            <img src={libCard} alt="Image1" />
            <h2>Libraries</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card" id="card1">
            <img src={smCard} alt="Image1" />
            <h2>Study Material</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
