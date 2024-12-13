import React from "react";

export default function Page4() {
  return (
    <div className=" bg-white">
      <div className=" text-[32px] text-[#5353ed] text-center my-[25px] font-serif ">
        Major Insurance Plans Accepted
      </div>
      <div className=" flex justify-evenly px-[120px]">
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa155c716002274616c8b6_unitedhealth.svg"
          alt="1logo"
        />
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa15b5059241364bf461f1_anthem.svg"
          alt="logo2"
        />
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa15b89058297e865adee8_aetna.svg"
          alt="logo3"
        />
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa165daa75265fd8c01a6e_bluecross.svg"
          alt="logo4"
        />
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/62e0f7b6abb5c8655b8d11c5_cigna-logo.png"
          alt="logo5"
        />
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa16a9905829bc095ae2f7_medicare.svg"
          alt="logo6"
        />
      </div>
      <div className=" my-[40px] justify-center text-center">
        <button className="bg-[#a2e100] hover:bg-[#a8c955] font-medium text-black rounded-[50px] py-2 px-[38px]">
          Insurances Accepted
        </button>
      </div>
    </div>
  );
}
