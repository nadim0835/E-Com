import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { GiAnticlockwiseRotation } from "react-icons/gi";

const Servise = () => {
  return (
    <section className=" py-[30px] border border-[#F0F0F0]">
      <Container>
        <Flex className={` items-center justify-between`}>
          <div className=" flex gap-[17px] items-center">
            <RiNumber2 className="  " />
            <p className="font-dmSans text-[16px] ">Two years warranty</p>
          </div>
          <div className=" flex gap-[17px] items-center">
            <FaShippingFast />

            <p className="font-dmSans text-[16px] ">Free shipping</p>
          </div>
          <div className=" flex gap-[17px] items-center">
            <GiAnticlockwiseRotation />
            <p className="font-dmSans text-[16px] ">Return policy in 30 days</p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Servise;
