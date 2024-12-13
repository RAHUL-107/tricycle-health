import React from "react";

export default function Page9() {
  return (
    <div className=" bg-[#007aff] w-[100%] justify-center items-center text-center">
      <div className=" py-[20px] text-white">
        <h1 className="text-[32px] font-serif">
          Imagine what’s possible on the other side of <br /> opioid use
          disorder.
        </h1>
        <p className=" text-[18px] py-[10px]">
          Our science-backed approach boasts 95% of patients reporting no <br />
          withdrawal symptoms at 7 days. We can help you achieve easier days{" "}
          <br />
          and a happier future.
        </p>
        <div className=" flex  justify-center  text-center py-[20px]">
          <div className="px-[10px]">
            <button className=" bg-[black] text-[white] px-[38px] py-[15px] rounded-[50px] font-medium">
              Get Started
            </button>
          </div>
          <div>
            <button className="bg-[white] text-[black] px-[38px] py-[15px] rounded-[50px] font-medium">
              or Book an enrollment call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
