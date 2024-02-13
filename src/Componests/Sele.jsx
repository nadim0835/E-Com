import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import leftimg from "../assets/Ad_1.png";
import rightone from "../assets/Ad_2.png";
import rihttwo from "../assets/Ad_3.png";
import Image from "./Image";

const Sele = () => {
  return (
    <section className=" lg:mt-[140px] mt-5">
      <Container>
        <Flex className={` gap-5 lg:gap-10 lg:flex-row flex-col-reverse  `}>
            <div className=" order-1 lg:order-first">

          <Image src={leftimg} />
            </div>
          <div>
            <Image src={rightone} />
         
            <Image className={`lg:mt-10 mt-5 `} src={rihttwo} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Sele;
