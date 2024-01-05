import React, { useEffect, useState } from "react";
import monkmain from "../assets/images/bigmonkey.webp";
import twomonk from "../assets/images/kong-2.webp";
import threemonk from "../assets/images/kong-3.webp";
import fourmonk from "../assets/images/kong-4.webp";
import twoRmonk from "../assets/images/kong-r-2.webp";
import threeRmonk from "../assets/images/kong-r-3.webp";
import fourRmonk from "../assets/images/kong-r-4.webp";
import dn1Rmonk from "../assets/images/kong-1.webp";
import dn2Rmonk from "../assets/images/kong-5.webp";
import dn3Rmonk from "../assets/images/kong-r-1.webp";
import dn4Rmonk from "../assets/images/kong-r-5.webp";
//
import big1 from "../assets/images/firstmonk.webp";
import big2 from "../assets/images/secondmonk.webp";
import big3 from "../assets/images/thirdmonk.webp";
import big4 from "../assets/images/forthmonk.webp";
import big5 from "../assets/images/fivemonk.webp";
import big6 from "../assets/images/sixthmonk.webp";
import big7 from "../assets/images/sevenmonk.webp";
import big8 from "../assets/images/eightmonk.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const TheKong = () => {
  const [character, setcharacter] = useState("tab1");
  function changecharacter(Tabs) {
    setcharacter(Tabs);
  }
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#0A0A0A] pt-[90px] sm:pb-[253px] relative z-[1] overflow-x-clip -mt-[2px]">
      <div className="max-w-[1140px] mx-auto px-3">
        <h2
          data-aos="fade-down"
          className=" uppercase text-white text-center font-azosans  sm:text-[64px] text-[40px] font-normal leading-[64px]"
        >
          tHE kONGS
        </h2>
        <span className="flex gap-5 items-center justify-between overflow-y-scroll flex-nowrap mt-6 ">
          <img
            data-aos="fade-down"
            onClick={() => changecharacter("tab6")}
            src={dn3Rmonk}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer sm:max-w-[121px] max-w-[121px]  sm:absolute right-[-2%] top-[28%] lg:top-[8%]  rounded-lg border-[#FDDA60] border-[4px]  z-[2]"
          />
          <img
            data-aos="fade-down"
            src={twoRmonk}
            onClick={() => changecharacter("tab7")}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer sm:max-w-[121px] max-w-[121px]  sm:absolute right-[17%] lg:right-[1%] xl:right-[4.5%] top-[20%] lg:top-[26%]  rounded-lg border-[#FDDA60] border-[4px] z-[2]  "
          />
          <img
            data-aos="fade-down"
            src={threeRmonk}
            onClick={() => changecharacter("tab8")}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer sm:max-w-[121px] max-w-[121px]  sm:absolute right-[42%] lg:right-[2%] xl:right-[11%] lg:top-[44%] top-[85%]  rounded-lg border-[#FDDA60] border-[4px] z-[2]  "
          />
          <img
            data-aos="fade-up"
            src={fourRmonk}
            onClick={() => changecharacter("tab9")}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer sm:max-w-[121px] max-w-[121px]  sm:absolute right-[21%] lg:right-[1%] xl:right-[4.5%] lg:bottom-[21%] bottom-[9%]  rounded-lg border-[#FDDA60] border-[4px] z-[2]  "
          />
          <img
            data-aos="fade-up"
            src={dn4Rmonk}
            onClick={() => changecharacter("tab10")}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer  sm:max-w-[121px] max-w-[121px]  sm:absolute right-[-2%] lg:bottom-[2%] bottom-[14%]  rounded-lg border-[#FDDA60] border-[4px]  z-[2]"
          />
        </span>
        <div className="md:h-[800px] sm:h-[400px] h-[300px]">
          {character === "tab1" && (
            <div>
              <img
                src={monkmain}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab2" && (
            <div>
              <img
                src={big2}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab3" && (
            <div>
              <img
                src={big3}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab4" && (
            <div>
              <img
                src={big4}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab5" && (
            <div>
              <img
                src={big5}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab6" && (
            <div>
              <img
                src={big6}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab7" && (
            <div>
              <img
                src={big7}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab8" && (
            <div>
              <img
                src={big8}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab9" && (
            <div>
              <img
                src={big1}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
          {character === "tab10" && (
            <div>
              <img
                src={big2}
                className="max-w-[786px] md:my-32 sm:my-16 my-8   lg:mt-[-7%] relative -z-[3] max-h-[786px] mx-auto w-full "
                alt="bottelwithmonk"
              />
            </div>
          )}
        </div>
        <div className="bg-[#FDDA60] w-[150px] md:w-[346px] h-[364px] absolute top-[34%] left-[40%] blur-[179px] -z-[4]"></div>
        <span className="flex gap-5 items-center justify-between overflow-y-scroll flex-nowrap">
          <img
            data-aos="fade-down"
            onClick={() => changecharacter("tab1")}
            src={dn1Rmonk}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer  sm:max-w-[121px] max-w-[121px]  sm:absolute left-[-2%] top-[28%] lg:top-[8%]  rounded-lg border-[#FDDA60] border-[4px]  z-[2]"
          />
          <img
            data-aos="fade-down"
            onClick={() => changecharacter("tab2")}
            src={twomonk}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer sm:max-w-[121px] max-w-[121px]  sm:absolute left-[17%] lg:left-[1%] xl:left-[4.5%] top-[20%] lg:top-[26%]  rounded-lg border-[#FDDA60] border-[4px] z-[2]  "
          />
          <img
            data-aos="fade-down"
            onClick={() => changecharacter("tab3")}
            src={threemonk}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer sm:max-w-[121px] max-w-[121px]  sm:absolute left-[41%] top-[20%] sm:top-[19%] lg:left-[2%] xl:left-[11%]  lg:top-[44%]  rounded-lg border-[#FDDA60] border-[4px] z-[2]  "
          />
          <img
            data-aos="fade-up"
            onClick={() => changecharacter("tab4")}
            src={fourmonk}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer sm:max-w-[121px] max-w-[121px]  sm:absolute lg:left-[1%] left-[17%] xl:left-[4.5%] bottom-[9%] lg:bottom-[21%]  rounded-lg border-[#FDDA60] border-[4px] z-[2]  "
          />
          <img
            data-aos="fade-up"
            onClick={() => changecharacter("tab5")}
            src={dn2Rmonk}
            alt="onemonk"
            className="lg:max-w-[181px] cursor-pointer sm:max-w-[121px] max-w-[121px]  sm:absolute left-[-2%] bottom-[12%] lg:bottom-[2%]  rounded-lg border-[#FDDA60] border-[4px]  z-[2]"
          />
        </span>
      </div>
    </div>
  );
};

export default TheKong;
