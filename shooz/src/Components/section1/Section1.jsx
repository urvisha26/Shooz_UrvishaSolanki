import React from "react";
import "./Section1.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const slides = [
  {

    id: 1,
    image: "/img/hero1.webp",
    position: "right",
    tag: "NEW COLLECTION",
    title: "Step Into Style With Confidence.",
    subtitle:
      "Upgrade your wardrobe with premium footwear made for every moment.",
  },
  {
    id: 2,
    image: "/img/hero2.webp",
    position: "right",
    tag: "COMFORT MEETS FASHION",
    title: "Discover Shoes That Look Great And Feel Even Better.",
    subtitle:
      "Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.",
  },
  {
    id: 3,
    image: "/img/hero3.webp",
    position: "left",
    tag: "ELEVATE YOUR LOOK",
    title: "Find The Perfect Pair Of Shoes To Complete.",
    subtitle:
      "Explore our wide range of styles, colors, and materials to find the perfect shoes for any occasion.",
  },
];

function Section1() {
  return (
    <section className="sec1-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="sec1-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="sec1-slide">
              
              <img src={slide.image} alt="" className="sec1-bg" />

              <div className="sec1-overlay"></div>

              {/* Dynamic Position */}
              <div className={`sec1-content ${slide.position}`}>
                <p className="sec1-tag">{slide.tag}</p>
                <h1 className="sec1-title">{slide.title}</h1>
                <p className="sec1-subtitle">{slide.subtitle}</p>
                <button className="sec1-btn">SHOP NOW →</button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Section1;