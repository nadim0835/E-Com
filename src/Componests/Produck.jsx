import React from "react";
import Image from "./Image";
import Pimage from "../assets/p1.png";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";

const Produck = () => {
  return (
    <div className=" w-[370px] group cursor-pointer ">
      <div className="  relative  ">
        <Image className={``} src={Pimage} />
        <div className=" absolute  bottom-0 left-0  duration-500 invisible opacity-0 group-hover:visible group-hover:opacity-100  w-[370px]  bg-white">
          <Flex
            className={` gap-[15px] justify-end items-center mr-[30px] pt-[26px] pb-5`}
          >
            <p className="  font-dmSans text-[16px] text-secondary hover:text-primary hover:font-bold duration-300  ">
              Add to Wish List
            </p>
            <FaHeart />
          </Flex>
          <Flex
            className={` gap-[15px] justify-end items-center mr-[30px] pb-5`}
          >
            <p className="  font-dmSans text-[16px] text-secondary hover:text-primary hover:font-bold duration-300  ">
              Compare
            </p>
            <FaRotate />
          </Flex>

          <Flex
            className={` gap-[15px] justify-end items-center mr-[30px] pb-[26px]`}
          >
            <p className="  font-dmSans text-[16px] text-secondary hover:text-primary hover:font-bold duration-300  ">
              Add to Wish List
            </p>
            <HiShoppingCart />
          </Flex>
        </div>
      </div>

      <Flex className={` mt-6 justify-between`}>
        <h5 className=" text-primary font-dmSans text-[20px] font-bold ">
          Basic Crew Neck Tee
        </h5>
        <h6 className=" font-dmSans font-[16px] leading-[30px] text-secondary  ">
          $44.00
        </h6>
      </Flex>
      <h6 className=" mt-[15px] font-dmSans font-[16px] leading-[30px] text-secondary  ">
        Black
      </h6>
    </div>
  );
};

export default Produck;
