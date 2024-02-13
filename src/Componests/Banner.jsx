import React from "react";
import BannerImage from "../assets/banner.png";
import Container from "./Container";
import Image from "./Image";
import "slick-carousel/slick/slick.css";
import "../Slider.css";

import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
   
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "6%",
          transform: "translateY(-50%)",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "#F5F7F9",
          borderRight: "2px #ffff solid",
          padding: "15px 0",
        }}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section>
      <Container>
        <Slider {...settings}>
          <Image className={` cursor-pointer`} src={BannerImage} />
          <Image className={` cursor-pointer`} src={BannerImage} />
          <Image className={` cursor-pointer`} src={BannerImage} />
        </Slider>
      </Container>
    </section>
  );
};

export default Banner;
