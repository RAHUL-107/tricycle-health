import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Pageinsurance() {
  return (
    <div>
      <div className=" flex w-[100%] bg-[#5353ed] px-[100px] py-[20px] ">
        <div></div>
        <div className=" w-[60%] py-[150px] ">
          <h1 className=" text-[48px] text-[white] font-bold">
            Insurances Accepted
          </h1>
          <p className=" text-[18px] font-bold text-[white] py-[30px]">
            Select your state to see which insurances we <br />
            accept where you live
          </p>
          <button className=" bg-[white] rounded-[50px] hover:bg-[#a2e100] font-bold py-4 px-6">
            Select your State <ArrowDropDownIcon></ArrowDropDownIcon>
          </button>
        </div>
        <div className=" w-[40%] pt-[100px] ">
          <img
            className=" w-[500px] h-[500px]"
            src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/6330d1e6721a2865e3154be7_new-bh-family.webp"
            alt="logoo p-[20px] py-[60px] pt-[150px]"
          />
        </div>
      </div>
      <div className=" bg-white">
        <div className=" flex justify-evenly py-[10px] px-[150px]">
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
      </div>
      <div className=" bg-[#D3D3D3] ">
        <div className=" py-[30px] justify-center text-center">
          <h2 className=" text-[30px]">No insurance?</h2>
          <h1 className=" text-[40px] text-[bold]">
            Self-pay Monthly Program Fee
          </h1>
        </div>
        <div className=" flex justify-center text-center">
          <div>
            <h1 className=" text-[140px] font-[600] ">
              <AttachMoneyIcon></AttachMoneyIcon>199
            </h1>
            <h2 className=" text-[20px] pb-[50px]">
              Monthly program fee <br /> No insurance
            </h2>
          </div>
          <div className=" text-[30px] p-[50px] text-left">
            <p>Doctor's visits</p>
            <p>Unlimited instant messaging</p>
            <p>Care navigation</p>
            <p>Online therapy groups</p>
          </div>
        </div>
      </div>
      <div className=" bg-[#1d171d] text-[white]">
        <div className=" justify-center text-center text-[30px] pt-[100px] font-serif">
          Costs of Medications & Lab Tests <br /> Buprenorphine/naloxone RX
        </div>
        <div className="flex text-center justify-center pb-[50px]">
          <div className=" text-center justify-center">
            <p className=" text-[60px] pt-[20px] font-[600]">
              <AttachMoneyIcon></AttachMoneyIcon>0-150
            </p>
            <p className=" text-[24px]">Per Month</p>
            <p className=" text-[24px] text-[#c88600]">
              Buprenorphine/naloxone RX
            </p>
            <p className=" text-[16px]">COVERED BY MOST INSURANCE PLANS</p>
            <p className=" text-[18px]">
              We’ll send your prescription to your chosen <br /> pharmacy. The
              cost will vary somewhat <br /> depending on your location and
              insurance <br />
              plan.
            </p>
          </div>
          <div className="text-center justify-center px-[100px]">
            <h1 className=" text-[60px] pt-[20px] font-[600]">
              <AttachMoneyIcon></AttachMoneyIcon>0
            </h1>
            <p className=" text-[24px] text-[#c88600]">Lab Test</p>
            <p className="text-[18px]">
              Lab tests are included in the monthly program <br /> fee. You will
              be able to complete the tests from <br /> home, unlike other
              providers.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#e3f1fb] justify-center text-center py-[50px]">
        <h1 className="text-[32px] text-[#5353ed]">Reclaim your days</h1>
        <p className=" text-[18px] py-[20px]">
          Our community of doctors, care providers, and support groups are
          available every day.
        </p>
        <div className=" block">
          <button className="bg-[#5353ed] text-[white] px-[18px] py-[9px] rounded-[50px] font-medium">
            Get Started
          </button>
        </div>
        <div className=" py-[20px]">
          <button className=" bg-[#e3f1fb] text-[#5353ed] hover:text-[white] hover:bg-[#5353ed] px-[18px] py-[9px] rounded-[50px] font-medium">
            Book an enrollment call
          </button>
        </div>
      </div>
    </div>
  );
}
