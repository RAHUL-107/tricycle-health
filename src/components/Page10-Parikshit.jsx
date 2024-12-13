import React from "react";
import Img1 from "./pic/TRICYCLE.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

export default function Page10() {
  return (
    <div>
      <div className=" bg-[white] w-[100%] py-[50px] px-[50px] flex">
        <div className=" w-[50%]">
          <img
            className=" h-[250px] w-[390px] border-[10px] border-b-black border-white"
            src={Img1}
            alt="brand logo"
          />
          <h1 className=" text-[black] font-[bold] text-[24px] pt-[20px]">
            Contact
          </h1>
          <div className=" text-[black] py-[20px]">
            <InstagramIcon />
            <FacebookIcon />
            <XIcon />
          </div>
          <div className=" py-[10px]">
            <button className=" bg-[black] text-[white] rounded-[50px] px-[25px] py-[15px]">
              Contact Us
            </button>
            <p className="text-[black] hover:underline cursor-pointer py-[20px]">
              Fax:(844) 705 0129
            </p>
          </div>
        </div>
        <div className=" w-[50%] text-[black] font-semibold">
          <p className=" pb-[10px] hover:underline cursor-pointer font-semibold">
            How it works
          </p>
          <p className=" pb-[10px] hover:underline cursor-pointer">About</p>
          <p className=" pb-[10px] hover:underline cursor-pointer">Pricing</p>
          <p className=" pb-[10px] hover:underline cursor-pointer">Careers</p>
          <p className=" pb-[10px] hover:underline cursor-pointer">Blog</p>
          <p className=" pb-[10px] hover:underline cursor-pointer">Legal</p>
          <p className=" pb-[10px] hover:underline cursor-pointer">
            Physicians/Clinicians
          </p>
          <p className=" pb-[0px] hover:underline cursor-pointer">
            Insurance Coverage By State
          </p>
        </div>
        <div className=" text-[black] font-semibold">
          <p className=" pb-[10px] cursor-pointer hover:underline">
            What is Suboxone?
          </p>
          <p className=" pb-[10px] cursor-pointer hover:underline">FAQs</p>
          <p className=" pb-[10px] cursor-pointer hover:underline">
            Online Suboxone Doctors
          </p>
          <p className=" pb-[10px] cursor-pointer hover:underline">
            Medication Assisted Treatment
          </p>
          <p className=" pb-[10px] cursor-pointer hover:underline">Press</p>
          <p className=" pb-[10px] cursor-pointer hover:underline">Reviews</p>
          <p className=" pb-[10px] cursor-pointer hover:underline">Locations</p>
          <p className=" pb-[0px] cursor-pointer hover:underline">
            Treatment Options
          </p>
        </div>
      </div>
      <div>
        <div className=" bg-[#000000cb]  w-[100%] px-[50px] py-[50px]">
          <div className=" border-b-2 flex justify-evenly items-center py-[20px]">
            <p className=" text-[18px] text-[white]">Privacy</p>
            <p className=" text-[18px] text-[white]">HIPAA</p>
            <p className=" text-[18px] text-[white]">Term of Use</p>
            <img
              src="https://static.legitscript.com/seals/3906623.png"
              alt="logo"
            />
            <img
              src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/61ffcef8e7b948cc208d6a67_image%2023.svg"
              alt="logo"
            />
          </div>
          <div className=" text-[white] justify-center text-center">
            <h1 className="py-[20px] text-[18px]">
              Notice to California Consumers
            </h1>
            <p className="py-[20px] text-[18px]">
              For informational purposes only, a link to the federal Centers for
              Medicare and Medicaid Services (CMS) Open Payments web page is{" "}
              <br />
              provided here. The federal Physician Payments Sunshine Act
              requires that detailed information about payment and other
              payments <br /> of value worth over ten dollars ($10) from
              manufacturers of drugs, medical devices, and biologics to
              physicians and teaching <br /> hospitals be made available to the
              public.
            </p>
            <p className=" border-t-2 py-[20px] text-[18px] ">
              Suboxone® is a registered trademark of Indivior PLC. Any reference
              to it is for informational purposes only, and is not endorsed or{" "}
              <br />
              sponsored by Indivior PLC.
            </p>
            <p className=" py-[20px] text-[18px] px-[50px]">
              The clinical services offered through this website are provided by
              Bicycle Health Medical Group, PA and Bicycle Health Provider Group{" "}
              <br />
              Inc., that are independent, physician-owned medical groups. For
              more information about the relationship between Bicycle Health,{" "}
              <br /> Inc. and the Bicycle Health Medical Group, PA and/or
              Bicycle Health Inc. and the Bicycle Health Provider Group Inc.,
              click here.
            </p>
            <p className=" py-[30px] text-[18px]">
              Copyright © 2023 Bicycle Health, Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
