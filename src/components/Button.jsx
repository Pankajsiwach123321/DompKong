import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.custum} after:hover:animate-bntol after:bg-white after:h-[250%] after:right-[-75px] after:opacity-100  after:absolute relative after:top-[-50px] after:rotate-[320deg] after:shadow-[0px_14px_56px_rgb(255_255_255_5)] after:w-[4px] after:z-[-1] z-[1] overflow-hidden  after:shadow-[#fff] uppercase py-2 sm:py-4 px-3 sm:px-6 bg-[#FDDA60] rounded-[4px] shadow-[0_4px_16px_0_#fdda6080] inline-block text-black font-azosans text-sm sm:text-base font-normal  leading-[17px]`}
    >
      {props.text}
    </button>
  );
};

export default Button;
