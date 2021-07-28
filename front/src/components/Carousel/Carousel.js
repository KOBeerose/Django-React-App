import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles.css";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

const Carousel = (props) => {
  return (
    <div className="container">
      <h6>Trusted by our beloved clients</h6>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://orange.ma" target="_blank">
            <img src="Assets/png/partners/orange.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://orange.ma" target="_blank">
            <img src="Assets/png/partners/orange.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://orange.ma" target="_blank">
            <img src="Assets/png/partners/orange.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://orange.ma" target="_blank">
            <img src="Assets/png/partners/orange.png" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://orange.ma" target="_blank">
            <img src="Assets/png/partners/orange.png" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
