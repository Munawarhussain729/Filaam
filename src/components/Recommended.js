import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";
import GodFather1 from "../assets/GodFather1.jpg";
import GodFather2 from "../assets/GodFather2.jpeg";
import GodFather3 from "../assets/GOdFather3.jpeg";
import Inception from "../assets/Inception.jpeg";
import PublicEnemies from "../assets/PublicEnemies.jpeg";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from "react-bootstrap";

export default function RecommendedTestimonial() {
  const StarCast = [
    {
      image: GodFather1,
      name: "God Father 1",
    },
    {
      image: GodFather2,
      name: "God Father 2",
    },
    {
      image: GodFather3,
      name: "God Father 3",
    },
    {
      image: Inception,
      name: "Inception",
    },
    {
      image: PublicEnemies,
      name: "Public Enemies",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={5}
        initialSlide="1"
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {StarCast.map((item) => {
          return (
            <SwiperSlide key={item}>
              <Container className="starCastContainer">
                <div>
                  <img
                    style={{ width: "270px", borderRadius: "25px" }}
                    src={item.image}
                    alt="Recommended not found"
                  />
                </div>
                <h4 style={{ color: "white", marginTop: "10px" }}>
                  {item.name}
                </h4>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
