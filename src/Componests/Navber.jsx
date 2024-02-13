import React, { useEffect, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import ListItems from "./ListItems";
import { FaBarsStaggered } from "react-icons/fa6";

import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { BsFillMenuButtonFill } from "react-icons/bs";

const Navber = () => {
  let [sowNav, setsowNav] = useState(false);
  function handleClick() {
    setsowNav(!sowNav);
  }
  // let[NavShow,setNavShow]=useState(true)
  // let handleClick=()=>{
  //     setNavShow(!NavShow);
  // }

  useState(() => {
    let clikNav = () => {
      if (window.innerWidth < 1024) {
        setsowNav(false);
      } else {
        setsowNav(true);
      }
    };

    clikNav();

    window.addEventListener("resize", clikNav);
  }, []);

  return (
    <>
      <nav className=" relative py-[31px] bg-white">
        <Container>
          <Flex className="justify-between items-center">
            <Image src="images/logo.png" alt="logo" />
            {sowNav && (
              <List
                className={` z-50 absolute top-16 lg:bg-white lg:p-[2px] p-5  gap-10 lg:static 
                bg-primary  lg:flex  lg:w-fit w-full  `}
              >
                <ListItems
                  className={` font-dmSans text-[14px] font-normal lg:text-secondary  lg:hover:text-primary lg:hover:pl-0 duration-300 hover:font-[700]  text-white hover:pl-1  cursor-pointer`}
                >
                  Home
                </ListItems>
                <ListItems
                  className={` font-dmSans text-[14px] lg:text-secondary font-normal  lg:hover:text-primary lg:hover:pl-0  duration-300  hover:font-[700]  text-white hover:pl-1    py-4 lg:py-0 `}
                >
                  Shop
                </ListItems>
                <ListItems
                  className={` font-dmSans text-[14px] lg:text-secondary font-normal  lg:hover:text-primary lg:hover:pl-0  text-white
                  hover:pl-1 duration-300 hover:font-[700] cursor-pointer`}
                >
                  About
                </ListItems>
                <ListItems
                  className={` font-dmSans text-[14px] lg:text-secondary font-normal  lg:hover:text-primary lg:hover:pl-0  duration-300 hover:font-[700]  text-white hover:pl-1 cursor-pointer py-4 lg:py-0  `}
                >
                  Contacts
                </ListItems>
                <ListItems
                  className={` font-dmSans text-[14px] lg:text-secondary font-normal  lg:hover:text-primary lg:hover:pl-0  text-white  hover:pl-1 duration-300 hover:font-[700] cursor-pointer lg:py-0  `}
                >
                  Journal
                </ListItems>
              </List>
            )}

            <div
              className="lg:hidden absolute top-[27px] right-[25px]  "
              onClick={handleClick}
            >
              {sowNav ? <BsFillMenuButtonFill className=" cursor-pointer" /> : <BsFillMenuButtonWideFill className=" cursor-pointer" />}
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navber;
