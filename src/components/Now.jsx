import React from "react";

export default function Now() {
  return (
    <div>
      <div className=" bg-[#f8dfc8] pt-[180px] px-[120px] w-[100%] pb-[50px]">
        <div className=" text-[48px] font-serif leading-[55px]">
          <h1>
            Helping patients lead fulfilling <br /> lives, free from opioid
            addiction
          </h1>
        </div>
        <div className=" flex text-[18px]">
          <div className=" w-[50%] text-[25px] leading-8">
            <p className=" pt-[30px]">
              {" "}
              Bicycle Health is America’s #1 telehealth <br /> provider of
              medications for opioid use disorder <br />
              (MOUD), offering an evidence-based clinical <br />
              care model that includes Medications for <br />
              Addiction Treatment (MAT), access to a highly- <br /> trained team
              of medical experts, therapy, a <br />
              customized treatment plan, and peer support <br />
              groups.{" "}
            </p>
            <p className=" pt-[20px] pb-[60px]">
              Bicycle Health’s mission is to address the <br /> country’s most
              severe public health crisis by <br />
              providing access to affordable, convenient, <br /> and
              confidential tele-MOUD treatment for <br />
              individuals in need and helping to reduce <br />
              stigmas associated with opioid addiction
            </p>
            <div className=" text-[18px] pb-[60px]">
              <button className=" bg-black text-white rounded-[50px] px-6 py-2 m-[10px]">
                Join Our Team
              </button>
              <button className=" bg-white text-black rounded-[50px] px-6 py-2">
                Physicians/Adv.Practice Clinicians
              </button>
            </div>
          </div>
          <div className="w-[50%] pt-[30px]">
            <img
              src="https://assets-global.website-files.com/61f7c8145fe6f608faa84b36/6449bb98cd34d133a9cd8783_VIDEO-THUMB.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" bg-[white] w-[100%]">
        <div className=" p-[40px] justify-center text-center">
          <h1 className=" text-[48px] font-serif">
            Leaders in Patient Advocacy
          </h1>
          <p className=" text-[22px]">
            For patients with opioid-use disorder, we work hard with leaders in
            Washington DC, <br />
            and at the state level to ensure access to qualify, affordable care.
          </p>
        </div>
        <div className=" p-[40px] w-[100%] flex">
          <div className=" w-[33%] justify-center text-center">
            <h1 className=" text-[22px] text-[#5353ed] font-serif">
              Impact on Quality & Outcomes of <br /> TeleOUD Treatment
            </h1>
            <p className=" text-[16px] font-[450]">
              Ample research has shown that allowing access <br /> to
              buprenorphine via telemedicine, during the <br />
              pandemic, reduced the rate of opioid-related <br />
              overdoses, ER visits and deaths, and did not <br />
              increase the rate of buprenorphine misuse. How <br />
              will making the process more difficult improve <br />
              patient outcomes?
            </p>
          </div>
          <div className=" w-[33%] justify-center text-center">
            <h1 className=" text-[22px] text-[#5353ed] font-serif">
              Access to Specialists in Addiction <br />
              Medicine
            </h1>
            <p className=" text-[16px] font-[450]">
              Addiction medicine is a high-demand specialty. <br /> Telemedicine
              democratizes access to these <br />
              specialists, so what is the value of making a <br />
              general practitioner with little or no expertise in <br />
              addiction medicine a gatekeeper to this form of <br />
              specialty care?
            </p>
          </div>
          <div className=" w-[33%] justify-center text-center">
            <h1 className=" text-[22px] text-[#5353ed] font-serif">
              Cost of Care
            </h1>
            <p className=" text-[16px] font-[450]">
              The DEA’s proposed rule ignores the cost to <br />
              patients of having an additional in-person exam, <br />
              the cost of transportation, childcare, time off of <br /> wor, and
              how those impact a person in recovery. <br /> Would the in-person
              requirement <br />
              disproportionately impact access to care for <br /> lower-income
              patients who already struggle to <br />
              afford care?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
