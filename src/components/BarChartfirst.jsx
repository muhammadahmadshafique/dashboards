import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          //   name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21, 37, 22, 43, 21],
        },
        {
          //   name: 'Striking Calf',
          data: [53, 32, 33, 52, 13, 43, 32, 37, 32, 43, 21],
        },
        {
          //   name: 'Tank Picture',
          data: [12, 17, 21, 19, 15, 31, 20, 37, 22, 43, 21],
        },
        {
          //   name: 'Bucket Slope',
          data: [9, 27, 15, 28, 26, 19, 34, 37, 22, 43, 21],
        },
        {
          //   name: 'Reborn Kid',
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
            horizontal: true,
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
          "#002733",
          "#002733",
          "#002733",
          "#002733",
          "#002733",
          "#002733",
          "#002733",
        ],
        borderRadius: 10, // Set the radius value for rounded corners

        stroke: {
          width: 6,
          colors: ["#fff"],
          borderRadius: 10, // Set the radius value for rounded corners
        },
        xaxis: {
          categories: [
            "awesome-app-backups",
            "financial-documents-inc",
            "database-master",
            "load-balancer-2",
            "media-content-central",
            "research-datasets-llc",
            "events-shared-data-staging",
            "marketdata-artifacts-dev",
            "devops-tools-repo",
            "marketing-assets-hq",
            "design-files-co",
          ],
          labels: {
            formatter: function (val) {
              return val + "K";
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
            height={620}
            width={650}
          />
        </div>
      </div>
    );
  }
}

export default ApexChart;
