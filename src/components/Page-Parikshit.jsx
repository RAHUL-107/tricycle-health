import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import Img1 from "./pic/TRICYCLE.png";

export default function Page() {
  return (
    <div className="flex items-center justify-evenly fixed w-full bg-white  ">
      <img
        className=" w-[190px] h-[100px] cursor-pointer"
        src={Img1}
        alt="LOGO"
      />
      <div className="cursor-pointer hover:text-blue-400 font-semibold">
        <p>
          <Link to="/OurProcess"> Our Process</Link>
        </p>
      </div>
      <div className="cursor-pointer  hover:text-blue-400  font-semibold">
        <p>
          <Link to="/Pageinsurance">Insurance & Pricing</Link>
        </p>
      </div>
      <div className="cursor-pointer group hover:text-blue-400  font-semibold">
        <a>
          About <ArrowDropDownIcon></ArrowDropDownIcon>
        </a>
        <div class="absolute hidden  space-y-5  bg-black text-white p-8 mt-2 rounded-md group-hover:block">
          <a className="block">Our Story</a>
          <a className="block">Leadership Team</a>
          <a className="block">Medical Team</a>
          <a className="block">Become a Partner</a>
          <a className="block">Careers</a>
        </div>
      </div>
      <div className="cursor-pointer  group  hover:text-blue-400  font-semibold">
        <a>For Clinicians</a> <ArrowDropDownIcon></ArrowDropDownIcon>
        <div class="absolute hidden space-y-5  bg-black text-white p-8 mt-2 rounded-md group-hover:block ">
          <a className="block">Refer a Patients</a>
          <a className="block">Research</a>
          <a className="block">Careers</a>
        </div>
      </div>
      <div className="cursor-pointer  group  hover:text-blue-400  font-semibold">
        <a>For Patients</a> <ArrowDropDownIcon></ArrowDropDownIcon>
        <div class="absolute hidden space-y-5  bg-black text-white p-8 mt-2 rounded-md group-hover:block">
          <a className="block">Knowledge Centre</a>
          <a className="block">Suboxone FAQ</a>
          <a className="block">Therapy & Support Services</a>
          <a className="block">Patient Advisory Council</a>
        </div>
      </div>
      <button className=" bg-[#a2e100] text-black  rounded-[50px] py-4 px-6 font-semibold ">
        <Link to="/Getstarted">Schedule a Call</Link>
      </button>
    </div>
  );
}
