import Container from "./Container";
import Flex from "./Flex";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import List from "./List";
import { IoClose } from "react-icons/io5";

import ListItem from "./ListItems";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [HideDropdwon, setHideDropdwon] = useState(false);
  const [userHide, setuserHide] = useState(false);
  const [Card, setCard] = useState(false);

  const praf = useRef();
  const uaerraf = useRef();
  const cardraf = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (praf.current.contains(e.target)) {
        setHideDropdwon(true);
      } else {
        setHideDropdwon(false);
      }
    });
  }, []);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (uaerraf.current.contains(e.target)) {
        setuserHide(true);
      } else {
        setuserHide(false);
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cardraf.current.contains(e.target)) {
        setCard(true);
      } else {
        setCard(false);
      }
    });
  }, []);

  return (
    <>
      <header className=" bg-[#F5F5F3] py-[25px] ">
        <Container>
          <Flex className={`justify-between items-center gap-3 lg:gap-0`}>
            <div className=" relative" ref={praf}>
              <div className=" cursor-pointer flex gap-[10px] items-center">
                <CgMenuLeftAlt className=" text-[25px] md" />
                <p className=" font-dmSans text-[14px] text-primary select-none">
                  Shop by Category
                </p>
              </div>
              {HideDropdwon && (
                <div className=" cursor-pointer w-[263px] bg-primary z-50 absolute mt-[15px]">
                  <List>
                    <ListItem
                      className={ `  py-4 px-[21px] text-white text-[14px] opacity-[70%] font-dmSans font-normal hover:opacity-100 hover:font-bold hover:pl-[31px] duration-300 border-b border-[#2D2D2D]`}
                    >
                      Home
                    </ListItem>
                    <ListItem
                      className={` py-4 px-[21px] text-white text-[14px] opacity-[70%] font-dmSans font-normal hover:opacity-100 hover:font-bold hover:pl-[31px] duration-300 border-b border-[#2D2D2D]`}
                    >
                      Furniture
                    </ListItem>
                    <ListItem
                      className={` py-4 px-[21px] text-white text-[14px] opacity-[70%] font-dmSans font-normal hover:opacity-100 hover:font-bold hover:pl-[31px] duration-300 border-b border-[#2D2D2D] `}
                    >
                      Electronics
                    </ListItem>
                    <ListItem
                      className={` py-4 px-[21px] text-white text-[14px] opacity-[70%] font-dmSans font-normal hover:opacity-100 hover:font-bold hover:pl-[31px] duration-300 border-b border-[#2D2D2D]`}
                    >
                      Clothes
                    </ListItem>
                    <ListItem
                      className={` py-4 px-[21px] text-white text-[14px] opacity-[70%] font-dmSans font-normal hover:opacity-100 hover:font-bold hover:pl-[31px] duration-300 border-b border-[#2D2D2D]`}
                    >
                      Bags
                    </ListItem>
                    <ListItem
                      className={` py-4 px-[21px] text-white text-[14px] opacity-[70%] font-dmSans font-normal hover:opacity-100 hover:font-bold hover:pl-[31px] duration-300 border-b border-[#2D2D2D] `}
                    >
                      Home appliances
                    </ListItem>
                  </List>
                </div>
              )}
            </div>
            <div className=" w-[601px] relative">
              <input
                className=" w-full py-4 px-[21px] placeholder:font-dmSans placeholder:text-[14px] placeholder:font-normal placeholder:text-[#C4C4C4] bg-white "
                type="text"
                placeholder="Search Products"
              />
              <IoSearchSharp className=" z-40 absolute top-[50%] right-0 hidden md:block  translate-y-[-50%] mr-[21px] " />
            </div>

            <div className=" flex gap-[41px]">
              <div>
                <div className=" relative" ref={uaerraf}>
                  <div className=" flex gap-[10px] cursor-pointer">
                    <FaUser />
                    <FaSortDown />
                  </div>
                  {userHide && (
                    <div className=" border border-[#F0F0F0] mt-[15px] z-50 absolute right-0">
                      <button className=" py-4 w-[200px] bg-[#2B2B2B] text-white text-[14px] font-bold block ">
                        My Account
                      </button>
                      <button className=" block py-4 w-[200px] bg-white text-[#2B2B2B] text-[14px] font-bold hover:bg-[#2B2B2B] hover:text-white duration-300 ">
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div ref={cardraf} className=" cursor-pointer relative">
                <HiShoppingCart />
                {Card && (
                  <div className=" border-[2px] border-[F0F0F0] w-[360px] mt-[15px] absolute z-50  right-0">
                    <div className=" p-5 flex items-center justify-between bg-[#F5F5F3]">
                      <div className=" flex gap-5 items-center">
                        <div className=" h-[80px] w-[80px] bg-[#D8D8D8]"></div>
                        <div>
                          <p className=" font-dmSans text-[14px] font-bold text-primary">
                            Black Smart Watch
                          </p>
                          <p className="font-dmSans text-[14px] font-bold text-primary">
                            $44.00
                          </p>
                        </div>
                      </div>
                      <IoClose />
                    </div>
                    <div className=" bg-[#FFFF] p-5">
                      <p className=" font-dmSans text-4 leading-[23px] text-[#767676]">
                        Subtotal:{" "}
                        <span className=" leading-[23px] font-dmSans text-[14px] font-bold text-primary ">
                          {" "}
                          $44.00
                        </span>{" "}
                      </p>
                      <div className=" flex gap-5 mt-[13px]">
                        <button className=" font-dmSans text-[14px]  font-bold text-primary w-[148px] py-4 border border-[#2B2B2B] hover:bg-primary hover:text-white ">
                          View Cart
                        </button>
                        <button className=" font-dmSans text-[14px]  font-bold text-primary w-[148px] py-4 border border-[#2B2B2B] hover:bg-primary hover:text-white ">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Flex>
        </Container>
      </header>
    </>
  );
};

export default Header;
