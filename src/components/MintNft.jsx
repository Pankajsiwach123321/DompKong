import React, { useEffect, useState } from "react";
import bottel from "../assets/images/bottel.webp";
import uppermint from "../assets/images/upperlayermint.png";
import Button from "./Button";
import bgroadmap from "../assets/images/roadmap.png";
import AOS from "aos";
import "aos/dist/aos.css";
const MintNft = () => {
  const [count, setcount] = useState(3);
  function negitive() {
    if (count > 3) {
      setcount(count - 1);
    }
  }
  function positive() {
    setcount(count + 1);
    if (count > 9) {
      setcount(10);
    }
  }
  const formattedCount = count < 10 ? `0${count}` : count;
   useEffect(() => {
     AOS.init({
       duration: 3000,
       once: true,
     });
   }, []);
  return (
    <div className="bg-[#0A0A0A] relative z-[1] bg-[url(./assets/images/mintbg.png)] bg-cover bg-no-repeat -mt-[2px] ">
      <div className="max-w-[1020px] mx-auto px-3 pt-[72px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="sm:w-6/12 w-full px-3 flex justify-center">
            <img
              data-aos="fade-up"
              src={bottel}
              alt="bottel"
              className="w-full max-h-[405px] sm:max-h-[804px] max-w-[358px]"
            />
          </div>
          <div className="sm:w-6/12 w-full px-3 flex pt-6 md:pt-0 flex-col justify-center">
            <h2
              data-aos="fade-down"
              className=" text-white font-azosans  lg:text-[64px] md:text-[50px] text-[40px ] font-normal leading-[64px]"
            >
              Mint NFT
            </h2>
            <div className=" flex flex-row flex-wrap -mx-3 mt-[51px]">
              <div className="w-1/2 px-3">
                <p className=" font-Montserrat text-white text-3xl md:text-[36px] font-black leading-[39px]">
                  9999
                </p>
                <p className=" text-white font-Montserrat text-base font-normal leading-[25px] pt-[14px]">
                  of 10,000 minted
                </p>
              </div>
              <div className="w-1/2 px-3">
                <span>
                  <p className=" font-Montserrat text-white text-3xl md:text-[36px] font-black leading-[39px]">
                    .2 ETH
                  </p>
                  <p className=" text-white font-Montserrat text-base font-normal leading-[25px] pt-[14px]">
                    per NFT
                  </p>
                </span>
              </div>
            </div>
            <div className=" flex flex-row flex-wrap -mx-3 mt-[33px]">
              <div className="w-1/2 px-3">
                <p className=" font-Montserrat text-white text-3xl md:text-[36px] font-black leading-[39px]">
                  Max 9
                </p>
                <p className=" text-white font-Montserrat text-base font-normal leading-[25px] pt-[14px]">
                  NFTs per transaction
                </p>
              </div>
              <div className="w-1/2 px-3">
                <span>
                  <p className=" font-Montserrat text-white text-3xl md:text-[36px] font-black leading-[39px]">
                    Max 2
                  </p>
                  <p className=" text-white font-Montserrat text-base font-normal leading-[25px] pt-[14px]">
                    Transaction per wallet
                  </p>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[14px] mt-[49px]">
              <span
                onClick={negitive}
                className=" cursor-pointer  bg-white   w-[75px]  h-[45px] md:h-[65px] flex items-center justify-center rounded-[4px]"
              >
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.62 0.536H11.42V6.656H0.62V0.536Z" fill="black" />
                </svg>
              </span>
              <p className=" text-white font-Montserrat text-3xl md:text-4xl max-w-[260px] w-full h-[45px] md:h-[65px] flex items-center justify-center  font-black leading-[39px]  border-[2px] text-center border-white rounded-[4px]">
                {formattedCount}
              </p>
              <span
                onClick={positive}
                className=" cursor-pointer bg-white  w-[75px]   h-[45px] md:h-[65px] flex items-center justify-center rounded-[4px]"
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.34 12.46H13.4V18.22H6.92V12.46H0.98V6.34H6.92V0.579999H13.4V6.34H19.34V12.46Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <Button text="MINT NOW" custum="max-w-[439px] mt-[29px]" />
          </div>
        </div>
      </div>
      <img
        src={uppermint}
        alt="uppermint"
        className="w-full max-h-[197px] absolute top-0 left-0 z-[-1]"
      />
      <div className=" max-w-[296px] w-full h-full max-h-[296px] bg-[#FDDA60] blur-[146px] z-[-1] absolute right-0 top-[40%]"></div>
      <div className=" max-w-[173px] w-full h-full max-h-[173px] bg-[#FDDA60] blur-[146px] z-[-1] absolute left-0 top-[17%]"></div>
      <img
        src={bgroadmap}
        alt="bgroadmap"
        className="w-full absolute bottom-[0%] left-0 -z-[1]"
      />
    </div>
  );
};

export default MintNft;
