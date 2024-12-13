import React from "react";

export default function Refer() {
  return (
    <div>
      <div className="bg-[#ddf] pt-[150px] pb-[40px]">
        <div className=" bg-white rounded-xl w-[55%] mx-auto shadow-2xl overflow-hidden p-[30px] ">
          <div className=" text-[18px] font-thin ">
            <p className=" ">
              To refer a patient to Bicycle, please fill out this secure form.
              We’ll use the patient's <br /> information to outreach them, and
              your information to share progress updates.
            </p>
            <h1 className=" text-[25px] font-semibold pt-[50px] border-b-2 pb-[20px]">
              Patient Information
            </h1>
          </div>
          <div>
            <h3 className=" pb-[10px]">Name *</h3>
            <form action="#">
              <div className=" flex gap-20">
                <input
                  type="text"
                  placeholder="First Name"
                  className=" border border-gray-400 py-1 px-5"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" border border-gray-400 py-1 px-5"
                />
              </div>
            </form>
            <div className=" flex gap-36 pt-[20px]">
              <h3 className=" pb-[10px]">Patient Contact Email:*</h3>
              <h3 className=" pb-[10px]">Patient Smartphone Number: *</h3>
            </div>
            <form action="#">
              <div className=" flex gap-20">
                <input
                  type="text"
                  placeholder=""
                  className=" border border-gray-400 py-1 px-5"
                />
                <input
                  type="text"
                  placeholder="Entre Valid Number"
                  className=" border border-gray-400 py-1 px-5"
                />
              </div>
            </form>
          </div>
          <div className="py-[20px]">
            <h3 className=" pb-[10px]">State*</h3>
            <form action="#">
              <div className=" flex gap-20">
                <input
                  type="text"
                  placeholder="New Delhi"
                  className=" border border-gray-400 py-1 px-5"
                />
              </div>
            </form>
          </div>
          <div>
            <h1 className=" text-[25px] font-semibold pt-[50px] border-b-2 pb-[20px]">
              Referrer Information
            </h1>
            <div className=" flex gap-36 pt-[20px]">
              <h3 className=" pb-[10px]">Referring Contact Name*</h3>
              <h3 className=" pb-[10px]">Referring Contact Email</h3>
            </div>
            <form action="#">
              <div className=" flex gap-20">
                <input
                  type="text"
                  placeholder=""
                  className=" border border-gray-400 py-1 px-5"
                />
                <input
                  type="text"
                  placeholder="example@example.com"
                  className=" border border-gray-400 py-1 px-5"
                />
              </div>
            </form>
            <div className="py-[20px]">
              <h3 className=" pb-[10px]">
                Referring Medical Group or Referring Organization (if any)
              </h3>
              <form action="#">
                <div className=" flex gap-20">
                  <input
                    type="text"
                    placeholder=""
                    className=" border border-gray-400 py-1 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="py-[20px]">
              <h3 className=" pb-[10px]">Notes (optional)</h3>
              <form action="#">
                <div className=" flex gap-20">
                  <input
                    type="text"
                    placeholder="Type Here"
                    className=" border border-gray-400 py-[100px] px-[250px]"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className=" border-b-2 pb-[20px]">
            <p className=" pb-[20px]">
              By submitting this form, I understand that Bicycle Health is an
              outpatient telemedicine-based opioid use disorder provider.
              Bicycle Health can treat most patients with opioid use disorder as
              long as they meet the following criteria:
            </p>
            <ull>
              <li>Over 18 years old</li>
              <li>Has a photo ID</li>
              <li>Has a smartphone</li>
              <li>Consents to telemedicine care</li>
              <li>Has a safe place to store medication</li>
              <li>Is not on Methadone, or on less than 40mgs of Methadone</li>
            </ull>
          </div>
          <div className=" py-[20px] border-b-2 pb-[20px]">
            <button className=" bg-[blue] text-white px-7 py-4">
              Submit Referral
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
