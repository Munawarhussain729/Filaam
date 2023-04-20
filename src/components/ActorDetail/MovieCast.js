import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";
import constantine from "../../assets/ActorCast/constantine.jpeg";
import Exposed from "../../assets/ActorCast/Exposed.jpeg";
import man_of_tai_chi from "../../assets/ActorCast/man_of_tai_chi.jpeg";
import Speed from "../../assets/ActorCast/Speed.jpeg";
import the_devil_advocate from "../../assets/ActorCast/the_devil_advocate.jpeg";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from "react-bootstrap";

export default function MovieCast() {
  const StarCast = [
    {
      image: constantine,
      characterName: "John Wick",
      name: "Constantine",
    },
    {
      image: Exposed,
      characterName: "Kill",
      name: "Exposed",
    },
    {
      image: man_of_tai_chi,
      characterName: "Charon",
      name: "Man of TAI CHI",
    },
    {
      image: Speed,
      characterName: "Caine",
      name: "Speed",
    },
    {
      image: the_devil_advocate,
      characterName: "Bryan Bedder",
      name: "The Devil Advocate",
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {StarCast.map((item) => {
          return (
            <SwiperSlide key={item}>
              <Container
                className="starCastContainer"
                style={{ marginTop: "40px" }}
              >
                <div>
                  <img
                    style={{ width: "200px", borderRadius: "25px" }}
                    src={item.image}
                    alt="Star Cast not found"
                  />
                </div>
                <h4 style={{ color: "white", marginTop: "10px" }}>
                  {item.name}
                </h4>
                <h4 className="grey_text">{item.characterName}</h4>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
