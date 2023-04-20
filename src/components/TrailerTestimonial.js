import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from "react-bootstrap";

export default function TrailerTestimonial() {
  const videosKey = [
    {
      urlKey: "2AUmvWm5ZDQ",
      title: "Final Trailer",
    },
    {
      urlKey: "3FVsztuuZXI",
      title: "Official Trailer",
    },
    {
      urlKey: "o3eUC6GCjOU",
      title: "Edited Trailer",
    },
    {
      urlKey: "C0BMx-qxsP4",
      title: "Duplicate Trailer",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        initialSlide="1"
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
        {videosKey.map((item) => {
          return (
            <SwiperSlide key={item}>
              <Container style={{ marginBottom: "30px" }}>
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${item.urlKey}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
                <h4 className="grey_text">{item.title}</h4>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
