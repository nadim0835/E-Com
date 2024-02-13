import Container from "./Container";
import Produck from "./Produck";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NewArival = () => {
  const PrevArrow = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  // Custom next arrow component
  const NextArrow = ({ className, onClick }) => {
    return (
      <div
        className={`absolute right-0  top-[50%] transform translate-y-[-50%] h-[64px] w-[64px] rounded-[50%] bg-[#979797]	 ${className}`}
        onClick={onClick}
      >
        <FaArrowRight className=" mx-auto  inline-block " />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className=" mt-[118px]">
      <Container>
        <h2 className=" mb-[48px] font-dmSans font-bold text-[39px] text-primary ">
          New Arrivals
        </h2>

        <Slider {...settings} className="">
          <Produck />
          <Produck />
          <Produck />
          <Produck />
          <Produck />
          <Produck />
          <Produck />
        </Slider>
      </Container>
    </section>
  );
};

export default NewArival;
