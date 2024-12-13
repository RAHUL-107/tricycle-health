import React from "react";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CallIcon from "@mui/icons-material/Call";

export default function Getstarted() {
  return (
    <div>
      <div className=" bg-black w-[100%] pt-[100px] flex pb-[7px] justify-center text-center">
        <div className=" pt-[4px]">
          <img
            src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/64a1f0ccd1822d7572e15be0_stars.svg"
            alt="star"
          />
        </div>
        <div>
          <h1 className=" text-white text-14px pl-[10px]">
            Trusted by 20,000+ patients
          </h1>
        </div>
      </div>

      <div className=" bg-[#5353ed] w-[100%] text-white flex">
        <div className=" w-[60%] text-center pt-[100px] pl-[0px]">
          <h1 className=" text-[48px] font-serif">We are here to help.</h1>
          <div className=" flex justify-center text-centre pl-[200px] py-[40px]">
            <div>
              <p className="pr-[20px] text-[25px]">
                If you are ready to enroll, you <br /> can begin the process
                now.
              </p>
            </div>
            <div className=" pt-[20px]">
              <button className=" rounded-[8px] bg-[#a2e100] text-[black] px-[100px] py-[15px] font-bold">
                <LaptopMacIcon className=" m-[5px]"></LaptopMacIcon>Enroll Online
              </button>
            </div>
          </div>
          <div className=" flex justify-center text-centre pl-[200px] py-[40px]">
            <div>
              <p className="pr-[20px] text-[25px]">
                You can also schedule a call <br />
                from us when it’s best for you.
              </p>
            </div>
            <div className=" pt-[20px]">
              <button className=" rounded-[8px] bg-[white] text-[black] px-[100px] py-[15px] font-bold">
                <CallIcon className="m-[5px]"></CallIcon>Schedule a Call
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[40%] px-[100px] py-[50px]">
          <img
            src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/65e94f6afdbfecff0dc3671a_doctors-p-500.png"
            alt="People"
          />
        </div>
      </div>
    </div>
  );
}
