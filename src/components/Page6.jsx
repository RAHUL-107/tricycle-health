import React from "react";

export default function Page6() {
  return (
    <div className=" bg-[white]">
      <div className="text-[32px] text-[#5353ed] text-center my-[30px] font-serif">
        Featured in
      </div>
      <div className="w-full flex justify-center mb-[30px]">
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa1907aa752619b8c02faf_NewYorkTimes.svg"
          alt="logo1"
        />
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa1904eda3ef8b997f1736_jama.svg"
          alt="logo2"
          className="mx-12"
        />
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa18fbc4f3e651e66c2f69_familymed.svg"
          alt="logo3"
        />
      </div>
      <div className=" text-[23px] text-center mb-[30px] flex justify-center">
        <h1 className=" text-[black] hover:text-[#5353ed] cursor-pointer font-[500]">
          TIME100 2022 |
        </h1>
        <h1 className="text-[black] hover:text-[#5353ed] cursor-pointer"> MOST INFLUENTIAL COMPANY</h1>
      </div>
    </div>
  );
}
