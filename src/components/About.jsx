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
          <div  data-aos="fade-down" className="lg:w-1/2 w-full px-3 flex flex-col justify-center items-center" >
            <div className=" me-0 lg:me-[48px] figure text-center lg:text-start ">
              <h2 className=" sm:text-[64px] text-[40px]  font-azosans text-white font-normal leading-[69px]">
                ABOUT
              </h2>
              <p className="max-w-[522px]  text-white  font-Montserrat text-base font-normal leading-[25px] ">
                Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
                amet et. Erat nam molestie. Vitae mollis lacus senectus mattis
                nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.{" "}
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className=" w-full lg:w-6/12 px-3 my-5 py-5 max-sm:overflow-hidden relative  "  >
            <div className="blur-[131px] bg-[#FDDA60] w-[120px] sm:w-[180px] md:w-[216px] rounded-[50%] h-[120px] sm:h-[180px] md:h-[216px] top-[10%] left-[30%] absolute "></div>
            <div class="container1">
            <div id="carousel">
              <figure><img id="slider" src={boats} alt="img"  className="figure" /></figure>
              <figure><img id="slider1" src={cars} alt="img"  className="figure" /></figure>
              <figure><img id="slider2" src={watche} alt="img"  className="figure" /></figure>
              <figure><img id="slider3" src={boats} alt="img"  className="figure" /></figure>
              <figure><img id="slider4" src={cars} alt="img"  className="figure" /></figure>
              <figure><img id="slider5" src={watche} alt="img"  className="figure" /></figure>
              <figure><img id="slider6" src={boats} alt="img"  className="figure" /></figure>
              <figure><img id="slider7" src={cars} alt="img"  className="figure" /></figure>
              <figure><img id="slider8" src={watche} alt="img"  className="figure" /></figure>

            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
