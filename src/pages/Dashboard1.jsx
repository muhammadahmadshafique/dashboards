import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import Bullet1 from "../components/Bullet";
import Linechart from "../components/Linechart";
const DemoColumn = () => {
  const data = [
    {
      type: "Corporate\n Brand Products",
      value: 58,
    },
    {
      type: "Distribution \n and Logistics",
      value: "87",
    },
    {
      type: "Private Label\n and Branding",
      value: 62,
    },
    {
      type: "Sales & Marketing\n Services",
      value: 51,
    },
    {
      type: "Retail \n Services",
      value: 18,
    },
    {
      type: "Fresh Kitchen\n Services",
      value: 140,
    },
    {
      type: "Military Products",
      value: 25,
    },
  ];
  const paletteSemanticRed = "#F4664A";
  const brandColor = "#5B8FF9";
  const config = {
    data,
    xField: "type", // Updated xField to match the new label property
    yField: "value",
    columnWidthRatio: 0.2,
    seriesField: "",
    color: ({ type }) => {
      if (
        type === "Distribution \n and Logistics" ||
        type === "Private Label\n and Branding" ||
        type === "Fresh Kitchen\n Services"
      ) {
        return "#FF7596";
      } else if (
        type === "Corporate\n Brand Products" ||
        type === "Sales & Marketing /n Services" ||
        type === "Military Products"
      ) {
        return "#FFE975";
      }
      return "#00FFB2";
    },

    legend: true,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    minColumnWidth: 35,
    maxColumnWidth: 35,
  };

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="flex justify-between flex-wrap mx-12 py-8">
        <div className="flex gap-x-6 mx-">
          <p>Business Process Overview</p>
          <div class="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
Negligible
            </label>
          </div>


          <div class="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Minor
            </label>
          </div>



          <div class="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Minor
            </label>
          </div>


          <div class="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
             Major
            </label>
          </div>


          <div class="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
             Critical
            </label>
          </div>
        </div>
        <p>
          View all
        </p>
      </div>
      <div className="flex h-screen space-x-8 flex-col md:flex-row mx-12">
        <div className="flex-1 h-screen">
          <Column {...config} />
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex justify-between items-center">
            <p>Retail Services</p>
            <p>Go to Page</p>
          </div>
          <div className="flex space-x-6">
            <div className="flex w-[50%] gap-x-5 divide-x border border-gray-400 p-4 rounded-xl">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <p>Loss Estimation</p>
                  <p>$8M</p>
                </div>
                <div className="h-16 w-32">
                  <Bullet1 />
                </div>
              </div>
              <div className="pl-3 space-y-4">
                <div>
                  <p>Likelihood</p>
                  <p>20%</p>
                </div>
                <div>
                  <p>Business Impact</p>
                  <p>$40M</p>
                </div>
              </div>
            </div>
            <div className="border w-[50%] space-y-10 border-gray-400 p-4  rounded-xl">
              <div className="flex gap-x-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M14.175 3.0375H12.15V1.51875C12.15 0.696094 11.4539 0 10.6312 0H5.56875C4.71445 0 4.05 0.696094 4.05 1.51875V3.0375H2.025C0.885937 3.0375 0 3.95508 0 5.0625V13.1625C0 14.3016 0.885937 15.1875 2.025 15.1875H14.175C15.2824 15.1875 16.2 14.3016 16.2 13.1625V5.0625C16.2 3.95508 15.2824 3.0375 14.175 3.0375ZM5.0625 1.51875C5.0625 1.26562 5.28398 1.0125 5.56875 1.0125H10.6312C10.8844 1.0125 11.1375 1.26562 11.1375 1.51875V3.0375H5.0625V1.51875ZM15.1875 13.1625C15.1875 13.732 14.7129 14.175 14.175 14.175H2.025C1.45547 14.175 1.0125 13.732 1.0125 13.1625V9.1125H5.56875V11.1375C5.56875 11.4223 5.79023 11.6437 6.075 11.6437H10.125C10.3781 11.6437 10.6312 11.4223 10.6312 11.1375V9.1125H15.1875V13.1625ZM6.58125 10.6312V9.1125H9.61875V10.6312H6.58125ZM15.1875 8.1H1.0125V5.0625C1.0125 4.52461 1.45547 4.05 2.025 4.05H14.175C14.7129 4.05 15.1875 4.52461 15.1875 5.0625V8.1Z"
                    fill="#002733"
                  />
                </svg>
                <div className="flex gap-x-2">
                  <img
                    src="./linkedin profile picture tips 1.png"
                    alt=""
                    srcset=""
                  />
                  <p>Oliver William</p>
                  <p>Director of...</p>
                </div>
              </div>
              <div className="flex gap-x-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M14.175 3.0375H12.15V1.51875C12.15 0.696094 11.4539 0 10.6312 0H5.56875C4.71445 0 4.05 0.696094 4.05 1.51875V3.0375H2.025C0.885937 3.0375 0 3.95508 0 5.0625V13.1625C0 14.3016 0.885937 15.1875 2.025 15.1875H14.175C15.2824 15.1875 16.2 14.3016 16.2 13.1625V5.0625C16.2 3.95508 15.2824 3.0375 14.175 3.0375ZM5.0625 1.51875C5.0625 1.26562 5.28398 1.0125 5.56875 1.0125H10.6312C10.8844 1.0125 11.1375 1.26562 11.1375 1.51875V3.0375H5.0625V1.51875ZM15.1875 13.1625C15.1875 13.732 14.7129 14.175 14.175 14.175H2.025C1.45547 14.175 1.0125 13.732 1.0125 13.1625V9.1125H5.56875V11.1375C5.56875 11.4223 5.79023 11.6437 6.075 11.6437H10.125C10.3781 11.6437 10.6312 11.4223 10.6312 11.1375V9.1125H15.1875V13.1625ZM6.58125 10.6312V9.1125H9.61875V10.6312H6.58125ZM15.1875 8.1H1.0125V5.0625C1.0125 4.52461 1.45547 4.05 2.025 4.05H14.175C14.7129 4.05 15.1875 4.52461 15.1875 5.0625V8.1Z"
                    fill="#002733"
                  />
                </svg>
                <div className="flex gap-x-2">
                  <img
                    src="./linkedin profile picture tips 1.png"
                    alt=""
                    srcset=""
                  />
                  <p>Oliver William</p>
                  <p>Director of...</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-baseline justify-center mt-10">
              <div className="flex">
                <button
                  className={`mr-4 p-2 ${
                    activeTab === "tab1" ? "border-b-2 border-blue-500" : ""
                  }`}
                  onClick={() => handleTabChange("tab1")}
                >
                  Trend Risk
                </button>
                <button
                  className={`p-2 ${
                    activeTab === "tab2" ? "border-b-2 border-blue-500" : ""
                  }`}
                  onClick={() => handleTabChange("tab2")}
                >
                  Executed
                </button>
              </div>
            </div>

            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[323px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Last 30 DAYS</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value=""></option>
            </select>
          </div>
          <div className="mt-6">
            {activeTab === "tab1" && <Linechart />}
            {activeTab === "tab2" && <Linechart />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoColumn;
