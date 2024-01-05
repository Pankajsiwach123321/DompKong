import React, { useEffect } from "react";
import cars from "../assets/images/cars.webp";
import watche from "../assets/images/watch.webp";
import boats from "../assets/images/bots.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#0A0A0A] -mt-[2px] overflow-x-clip">
      <div className=" max-w-[1140px] mx-auto px-3">
        <div className="flex flex-wrap flex-row -mx-3 pt-[129px] pb-[84px]">
          <div
            data-aos="fade-down"
            className="sm:w-1/2 w-full px-3 flex flex-col justify-center"
          >
            <h2 className=" sm:text-[64px] text-[40px]  font-azosans text-white font-normal leading-[69px]">
              ABOUT
            </h2>
            <p className="max-w-[522px]  text-white  font-Montserrat text-base font-normal leading-[25px] ">
              Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
              amet et. Erat nam molestie. Vitae mollis lacus senectus mattis
              nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.{" "}
            </p>
          </div>
          <div
            data-aos="fade-up"
            className=" w-full lg:w-6/12 px-3 max-sm:overflow-hidden relative  "
          >
            <div className="blur-[131px] bg-[#FDDA60] w-[120px] sm:w-[180px] md:w-[216px] rounded-[50%] h-[120px] sm:h-[180px] md:h-[216px] top-[10%] left-[30%] absolute "></div>
            <div className="relative conatiner1 my-[4%] mx-auto py-5">
              <div className="  h-[300px] w-full flex justify-center items-center bg-transparent">
                <div className="slider-box-ABout">
                  <div className="carousel w-full cursor-pointer flex items-center justify-center">
                    <div className="w-[200px] h-[140px] absolute overflow-hidden backface it1 border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center">
                      <img
                        className="w-full rounded-[16px] h-full"
                        src={cars}
                        alt="img
                        "
                      />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it2">
                      <img className="w-full" src={boats} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it3">
                      <img className="w-full" src={watche} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it4">
                      <img className="w-full" src={cars} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it5">
                      <img className="w-full" src={boats} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it6">
                      <img className="w-full" src={watche} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it7">
                      <img className="w-full" src={cars} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it8">
                      <img className="w-full" src={boats} alt="img" />
                    </div>
                    <div className=" w-[200px] h-[140px] absolute overflow-hidden backface border-[3px] rounded-[16px] border-[#FDDA60] flex justify-center items-center it9">
                      <img className="w-full" src={cars} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
