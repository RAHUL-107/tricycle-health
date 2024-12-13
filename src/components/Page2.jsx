import React from "react";

export default function Page2() {
  return (
    <div className=" flex bg-[#d5dbdb]  w-[100%]   px-[100px] py-[40px] ">
      <div className=" w-[50%] justify-center text-center">
        <h1 className=" text-[32px] font-serif">New patients</h1>
        <p className=" text-[18px]">
          Safe, confidential, and affordable treatment for opioid <br /> use
          disorder via our telehealth <br />
          services.
        </p>
        <button className=" bg-black text-white rounded-[50px] py-3 px-5 m-[20px]">
          How it Works
        </button>
      </div>
      <div className=" w-[50%] justify-center text-center">
        <h2 className=" text-[32px] font-serif">For clinicians</h2>
        <p className=" text-[18px] pb-[30px]">
          We are a specialty practice serving patients with opioid <br /> use
          disorder (OUD)
        </p>
        <button className=" bg-black text-white rounded-[50px] py-3 px-5 m-[20px]">
          Refer a Patient
        </button>
      </div>
    </div>
  );
}
