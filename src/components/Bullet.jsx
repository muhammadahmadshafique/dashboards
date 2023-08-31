import React from "react";

const ProgressBar = ({ percentages }) => {
  let xOffset = 0;

  return (
    <div className="relative h-2 bg-gray-300 rounded-lg overflow-hidden">
      {percentages.map((percentage, index) => {
        const color =
          index === 0
            ? "bg-[#00FFB2]"
            : index === 1
            ? "bg-[#FFE975]"
            : "bg-[#FF7596]";
        const width = `${percentage}%`;
        const style = {
          width,
          left: `${xOffset}%`,
        };
        xOffset += percentage;

        return (
          <div key={index} className={`h-full absolute ${color}`} style={style}>
            {index === percentages.length - 1 && (
              <div className="h-full absolute  w-2 transform -translate-x-1/2"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const percentages = [20, 40, 40]; // Adjust percentages as needed

  return (
    <div className="">
      <div className="w-[123px] relative">
        <div className="absolute top-[-12px] left-[18px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
          >
            <path
              d="M7.36091 9.54305C6.97385 10.1981 6.02612 10.1981 5.63906 9.54305L0.891502 1.50873C0.497593 0.842112 0.978129 9.73109e-08 1.75243 2.96195e-08L11.2475 -8.00469e-07C12.0218 -8.6816e-07 12.5024 0.842113 12.1085 1.50873L7.36091 9.54305Z"
              fill="#002733"
            />
          </svg>
        </div>
        <ProgressBar percentages={percentages} />
      </div>
    </div>
  );
};

export default App;
