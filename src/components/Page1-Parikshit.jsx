import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div className=" flex justify-center pt-[90px]">
      <div className="w-1/2">
        <div className=" pl-[10%]">
          <h1 className="text-[48px] font-normal leading-[50px] font-serif pt-[50px]">
            The Nation's #1 Telehealth Treatment Program for <br />
            Opioid Use Disorder
          </h1>
          <p className=" text-[22px] my-[15px]">
            Clinical care, medication for addiction treatment <br />
            (MAT), therapy and support.
          </p>
          <div className=" text-[18px] my-[20px] leading-[27px] font-normal">
            <div>
              {" "}
              <DoneIcon className=" text-[#a2e100]" />
              100% online from our secure app
            </div>
            <div>
              {" "}
              <DoneIcon className="text-[#a2e100]" />
              Full-time employed care team
            </div>
            <div>
              {" "}
              <DoneIcon className="text-[#a2e100]" />
              Suboxone prescriptions, often same day
            </div>
          </div>
          <div className="mt-[40px]">
            <button className="bg-[#a2e100] hover:bg-[#a8c955] font-medium text-black rounded-[50px] py-4 px-7">
              <Link to="/Getstarted">Get Started</Link>
            </button>
          </div>
          <div className="mt-[10px]">
            <button className="bg-[white] border-2 border-[#a2e100] hover:bg-[#a2e100] font-medium text-black rounded-[50px] py-4 px-7">
              <Link to="/Refer"> Refer a Patient</Link>
            </button>
          </div>
          <div className="mt-[10px]">
            <button className="bg-[white] border-2 border-[#a2e100] hover:bg-[#a2e100] font-medium text-black rounded-[50px] py-4 px-7">
            <Link to="/Now-hiring"> Now Hiring</Link>
            </button>
          </div>
        </div>
        <div className=" my-[15px]">
          <ReportProblemIcon></ReportProblemIcon>RX Only:See important safety
          information about Suboxone
        </div>
      </div>
      <div>
        <img
          src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/643fc28f2713221c51b3e308_homepage%20(1)-p-500.webp"
          alt="logo"
        />
      </div>
    </div>
  );
}
