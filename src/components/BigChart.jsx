import React ,{useState} from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
} from "recharts";

const data = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 150 },
  { name: "Apr", value: 300 },
  { name: "May", value: 400 },
  { name: "Jun", value: 280 },
];
function BigChart({
  visiters,
  numberss,
  greaterorless,
  greaterorlessNumbers,
  datee,
  views,
}) {



    // Modify data to include values for each year
    const data = {
      "1 year ago": [
        { name: "Jan", value: 100 },
        { name: "Feb", value: 180 },
        { name: "Mar", value: 430 },
        { name: "Apr", value: 250 },
        { name: "May", value: 350 },
        { name: "Jun", value: 240 },
      ],
      "2 years ago": [
        { name: "Jan", value: 80 },
        { name: "Feb", value: 10 },
        { name: "Mar", value: 400 },
        { name: "Apr", value: 20 },
        { name: "May", value: 280 },
        { name: "Jun", value: 190 },
      ],
    };
  
    const [selectedYear, setSelectedYear] = useState("1 year ago");
  
    const handleSelectChange = (event) => {
      setSelectedYear(event.target.value);
    };
  
    const selectedData = data[selectedYear];

     // Format data for the AreaChart
  const chartData = selectedData.map((item) => ({
    name: item.name,
    value: item.value,
  }));
  return (
    <div className="">
      <div className="rounded-lg bg-white  mt-11 p-3 py-6 ">
        <div className=" ">
          <ResponsiveContainer width={650} height={270}>
            <AreaChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                  <stop className="opacity-50" offset="15%" stopColor="#FF7596" stopOpacity={0.1} />
                  <stop offset="55%" stopColor="Green" stopOpacity={0.1} />
                  <stop offset="45%" stopColor="#FFE975" stopOpacity={0.1} />


                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="gradientFill1" x1="0" y1="0" x2="0" y2="1">
                  <stop className="opacity-80" offset="15%" stopColor="Green" stopOpacity={0.8} />
                  <stop offset="55%" stopColor="pink" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                fill="url(#gradientFill)"
                stroke="url(#gradientFill1)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default BigChart;
