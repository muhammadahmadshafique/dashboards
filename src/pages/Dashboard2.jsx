import React, { useState } from "react";
import ApexChart from "../components/BarChartfirst";
import Bullet1 from "../components/Bullet.jsx"
import BigChart from "../components/BigChart.jsx"
import ApexChart2 from "../components/BarChartfirst2";
function Dashboard2() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      {/* top start */}
      <div className="flex justify-between flex-wrap mb-6 mx-12 py-8">
        <div className="flex justify-center items-center gap-x-6 mx-">
          <p className="text-[#002733] text-[18px] font-inter font-semibold">
            Entity Risk Overview
          </p>
          <div className="flex gap-x-2 justify-center items-center">
            <p className="text-[#002733] text-[17px] font-inter font-light">
              Type
            </p>
            <select
              id="countries"
              class="bg-gray-50 px-3 pr-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[323px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>S3</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value=""></option>
            </select>
          </div>
        </div>

        <p className="text-[#5B83EA] cursor-pointer text-[14px] font-inter font-semibold">
          View all
        </p>
      </div>
      {/* top end */}

      <div className="flex space-x-6">
       <div className="w-[50%]">
       <ApexChart />
       </div>
        <div className="w-[45%] abc p-3 space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[#002733] text-[18px] font-inter font-semibold">
            load-balancer-2
            </p>
            <p className="text-[#5B83EA] cursor-pointer text-[14px] font-inter font-semibold">
              Go to Page
            </p>
          </div>
          <div className="flex space-x-6">
            <div className="flex w-[50%] gap-x-5  divide-x losediv p-2">
              <div className="flex gap-y-6 flex-col">
                <div className="space-y-2 mt-3">
                  <p className="text-[#002733] whitespace-nowrap text-[12px] font-inter font-normal">
                  Current Loss Estimation
                  </p>
                  <p className="text-[#002733] text-[24px] font-inter font-semibold">
                    $58M
                  </p>
                </div>
    
              </div>
              <div className="pl-3 space-y-4">
                <div className="space-y-1 mt-3">
                  <p className="text-[#002733] whitespace-nowrap text-[12px] font-inter font-normal">
                  Business Processes
                  </p>
                  <p className="text-[#002733] text-[24px] font-inter font-semibold">
                    5
                  </p>
                </div>
              
              </div>
            </div>
            <div className="border w-[50%] space-y-4 losediv p-2">
              <div className="flex gap-x-3 items-center">
              
           
                <div className="flex hn py-1 px-2 pr-9 items-center  gap-x-1">
                  <img src="./men1.svg" alt="" srcset="" />
                  <p className="whitespace-nowrap text-[#002733] text-[14px] font-inter font-normal">
                    Oliver William
                  </p>
                  <p className="whitespace-nowrap text-[#002733] text-[13px] font-inter ml-1 opacity-70 font-light">
                    Director of...
                  </p>
                </div>
              </div>
              <div className="flex   gap-x-3 items-center">
                {/* <img src="./ss.png" alt="" srcset="" /> */}
                <div className="flex py-1 px-2 pr-9 hn items-center  gap-x-1">
                  <img src="./men2.svg" alt="" srcset="" />
                  <p className="whitespace-nowrap text-[#002733] text-[14px] font-inter font-normal">
                    Liam Noah
                  </p>
                  <p className="whitespace-nowrap text-[#002733] text-[13px] font-inter ml-4 opacity-70 font-light">
                    Product Ma...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-center gap-x-20 items-baseline mt-5">
            <div className="flex flex-col items-baseline justify-center mt-10">
              <div className="flex">
                <button
                  className={`mr-4 p-2 whitespace-nowrap ${
                    activeTab === "tab1"
                      ? "border-b-2 whitespace-nowrap border-black text-[#002733] text-[18px] font-inter font-semibold"
                      : "font-normal whitespace-nowrap"
                  }`}
                  onClick={() => handleTabChange("tab1")}
                >
                  Trend Risk
                </button>
                <button
                  className={`p-2 ${
                    activeTab === "tab2"
                      ? "border-b-2 border-black text-[#002733] text-[16px] font-inter font-semibold"
                      : "font-normal"
                  }`}
                  onClick={() => handleTabChange("tab2")}
                >
                  Executed
                </button>
                <button
                  className={`p-2 ${
                    activeTab === "tab3"
                      ? "border-b-2 border-black text-[#002733] text-[16px] font-inter font-semibold"
                      : "font-normal"
                  }`}
                  onClick={() => handleTabChange("tab3")}
                >
                  Suggested
                </button>
              </div>
            </div>

            <select
              id="countries"
              class="bg-gray-50 px-3 pr-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[323px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Last 30 DAYS</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value=""></option>
            </select>
          </div>
          <div className="mt-6">
            {activeTab === "tab1" &&   <ApexChart2 />  }
            {activeTab === "tab2" &&   <ApexChart2 />  }
            {activeTab === "tab3" &&   <ApexChart2 />  }
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard2;
