import React, { useEffect } from "react";
import partner1 from "../assets/images/evening.png";
import partner2 from "../assets/images/nftcalender.png";
import partner3 from "../assets/images/nebraska.png";
import partner4 from "../assets/images/fanniemae.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Partners = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#0A0A0A] -mt-[2px]">
      <div className="max-w-[1140px] mx-auto px-3">
        <h2 className=" text-white text-center font-azosans  sm:text-[64px] text-[40px] font-normal leading-[64px]">
          Partners
        </h2>
        <div className="flex flex-row flex-wrap items-center pb-[52px] -mx-3">
          <div className="lg:w-1/4 flex justify-center md:w-1/3 pt-[52px] sm:w-1/2 w-full px-3 h-full relative lg:after:absolute lg:after:w-[5px] lg:after:h-[127px]  lg:after:rotate-[12deg] after:bg-[#FDDA60] after:right-[-2%] after:bottom-[-39%] lg:after:shadow-[0_0_14px_1px_#FDDA60]">
            <div className="flex items-center">
              <img
                data-aos="fade-up"
                src={partner1}
                alt="partner"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full flex pt-[52px] h-full justify-center px-3 relative lg:after:absolute lg:after:w-[5px] lg:after:h-[127px] lg:after:bg-[#FDDA60] after:right-[5%] after:bottom-[3%]  after:rotate-[12deg] lg:after:shadow-[0_0_14px_1px_#FDDA60]">
            <div className="flex items-center">
              <img
                data-aos="fade-up"
                src={partner2}
                alt="partner"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/4 flex justify-center md:w-1/3 pt-[52px] sm:w-1/2 w-full px-3 h-full relative lg:after:absolute lg:after:w-[5px] lg:after:h-[127px]  lg:after:rotate-[12deg] after:bg-[#FDDA60] after:right-[2%] after:bottom-[-18%] lg:after:shadow-[0_0_14px_1px_#FDDA60]">
            <div className="flex items-center">
              <img
                data-aos="fade-up"
                src={partner3}
                alt="partner"
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/4 flex justify-center md:w-1/3 pt-[52px] sm:w-1/2 w-full px-3 h-full  ">
            <div className="flex items-center">
              <img
                data-aos="fade-up"
                src={partner4}
                alt="partner"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
