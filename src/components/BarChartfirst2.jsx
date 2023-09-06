import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
            name: 'Tippy..',
          data: [44, 55, 41, 37, 22, 43, 21, 37, 22, 43, 21],
        },
        {
            name: 'Development..',
          data: [53, 32, 33, 52, 13, 43, 32, 37, 32, 43, 21],
        },
        {
            name: 'Distribution..',
          data: [12, 17, 21, 19, 15, 31, 20, 37, 22, 43, 21],
        },
        {
            name: 'SpartaNash’s..',
          data: [9, 27, 15, 28, 26, 19, 34, 37, 22, 43, 21],
        },
        {
            name: 'Manufacturing..',
          data: [25, 12, 19, 32, 25, 24, 20, 37, 22, 43, 21],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 50,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 20, // Set the radius value for rounded corners

            dataLabels: {
              total: {
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
                borderRadius: 20, // Set the radius value for rounded corners
              },
              borderRadius: 10, // Set the radius value for rounded corners
            },
            // barWidth: '120%'
            borderRadius: 10, // Set the radius value for rounded corners
            distributed: false,
          },
        },
        colors: [
          "#6224D4",
          "#915FED",
          "#C7B1F0",
          "#C7B1F0",
          "#915FED",
          "#C7B1F0",
          "#C7B1F0",
        ],
        borderRadius: 10, // Set the radius value for rounded corners

        stroke: {
          width: 6,
          colors: ["#fff"],
          borderRadius: 10, // Set the radius value for rounded corners
        },
        xaxis: {
          categories: [
            "19 Jan",
            "20 Jan",
            "21 Jan",
            "22 Jan",
            " 23 Jan",
            "24 Jan",
            "25 Jan",
            " 26 Jan",
            "27 Jan",
            " 28 Jan",
            "29 Jan",
          ],
          labels: {
            formatter: function (val) {
              return val ;
            },
            maxWidth: 2850,
          },
        },
        yaxis: {
          //   title: {
          //     text: "undefined",
          //   },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  }

  render() {
    return (
      <div className="">
        <div className="ml-12">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={360}
            width={580}
          />
        </div>
      </div>
    );
  }
}

export default ApexChart2;
