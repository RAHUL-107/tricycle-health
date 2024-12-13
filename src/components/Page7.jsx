import React from "react";

export default function Page7() {
  return (
    <div className=" bg-[#d6f9f4] w-[100%] flex px-[100px]">
      <div className=" w-[55%] justify-center text-left pl-[80px]">
        <h1 className=" text-[#5353ed] text-[32px]  py-[20px] font-serif">
          You’re not alone. We share the <br /> journey with you.
        </h1>
        <p className=" text-[18px] pb-[30px] pl-[30px]">
          We know this is hard, but our robust <br /> community of medical
          providers, support <br /> staff, and fellow patients hold you up when{" "}
          <br /> it gets tough.
        </p>
        <p className=" text-[18px] py-[10px] pb-[30px] pl-[30px]">
          Our Clinical Support Specialists coach you <br /> through the recovery
          journey, guiding you <br />
          through any hiccups along the way and <br /> answering questions on
          medication,
          <br /> payment, and technology.
        </p>
        <button className=" text-[white] bg-[#5353ed] font-medium rounded-[50px] px-[18px] py-[12px]">
          Meet Our Clinical Team
        </button>
      </div>
      <div className=" w-[45%] py-[40px] pr-[50px]">
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61fa27e03a337b2b59608137_image-photos-2x2.webp"
          alt="Doctor logo"
        />
      </div>
    </div>
  );
}
