import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";
import Bill_Skarsegard from "../../assets/Bill_Skarsegard.jpeg";
import Donnie_Yen from "../../assets/Donnie_Yen.jpeg";
import Ian_Mcshane from "../../assets/Ian_Mcshane.jpeg";
import Keanu_Reeves from "../../assets/Keanu_Reeves.jpeg";
import Lance_Reddick from "../../assets/Lance_Reddick.jpeg";
import Scott_Adkins from "../../assets/Scott_Adkins.jpeg";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from "react-bootstrap";

export default function StarCaseTestimonial() {
  const StarCast = [
    {
      image: Keanu_Reeves,
      characterName: "John Wick",
      name: "Keanu Reeves",
    },
    {
      image: Scott_Adkins,
      characterName: "Kill",
      name: "Scott Adkins",
    },
    {
      image: Lance_Reddick,
      characterName: "Charon",
      name: "Lance Reddik",
    },
    {
      image: Donnie_Yen,
      characterName: "Caine",
      name: "Donnie Yen",
    },
    {
      image: Bill_Skarsegard,
      characterName: "Bryan Bedder",
      name: "Bill Skarsegard",
    },
    {
      image: Ian_Mcshane,
      characterName: "Winston",
      name: "Iam Mcshance",
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
            slidesPerView: 5,
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
                    style={{ width: "170px", borderRadius: "25px" }}
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
