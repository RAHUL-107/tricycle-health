import React from "react";

export default function Page5() {
  return (
    <div className=" bg-[#007aff] px-[100px] py-10 flex">
      <div className=" w-[50%]">
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/623c23ffa9cc04880dd39d99_people-outside-house.webp"
          alt="logo1"
        />
      </div>
      <div className=" w-[50%]  px-10 block">
        <h1 className=" text-[32px] leading-[50px] text-[white] font-serif ">
          Evidence-based treatment that <br />
          works for opioid addiction.
        </h1>
        <div className=" py-10">
          <p className=" text-[18px] pr-[90px] text-[white] ">
            Medication for Addiction Treatment (MAT) offers the lowest relapse
            rates for opioid use disorder, helping people to stop using opioids
            with minimal physical discomfort. With this solid foundation, our
            patients are able to achieve meaningful careers, stable
            relationships, and better futures.
          </p>
        </div>
        <div className="my-[40px] justify-center text-left">
          <button className="bg-[#fff] font-medium text-black rounded-[50px] py-4 px-6">
            Learn About Our Process
          </button>
        </div>
      </div>
    </div>
  );
}
