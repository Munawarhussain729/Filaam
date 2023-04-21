import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

import constantine from "../../assets/Constantinebac.jpeg";
import Exposed from "../../assets/Exposed.jpg";
import man_of_tai_chi from "../../assets/ManOfTaiChibac.jpg";
import Speed from "../../assets/Speedbac.jpg";

const MainSlider = () => {
  const MainSlider = [
    {
      background: constantine,
      title: "Constantine ",
      description:
        "Constantine is a 2005 American superhero horror film directed by Francis Lawrence in his directorial debut. Written by Kevin Brodbin and Frank Cappello, it is loosely based on DC Comics' Hellblazer comic book.",
    },
    {
      background: Exposed,
      title: "Exposed ",
      description:
        "A police detective investigates the truth behind his partner's death. The mysterious case reveals disturbing police corruption and a dangerous secret involving an unlikely young woman.",
    },
    {
      background: man_of_tai_chi,
      title: "Man of Tai Chi ",
      description:
        "Tiger, a martial artist, becomes a part of an illegal underground fight club to be able to save the temple where he studies from getting demolished.",
    },
    {
      background: Speed,
      title: "Speed ",
      description:
        "Speed is a 1994 American action film directed by Jan de Bont in his feature film directorial debut. The film stars Keanu Reeves, Dennis Hopper, Sandra Bullock, Joe Morton, and Jeff Daniels. Its premise revolves around a bus that is rigged by a terrorist to explode if its speed falls below 50 miles per hour.",
    },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {MainSlider.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.background} alt="Not Found"/>
              <div className="mainSliderContent">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainSlider;
