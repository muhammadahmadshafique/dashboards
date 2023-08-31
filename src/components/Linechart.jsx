import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const [dataq, setData] = useState([]);

  const data = [
    {
      "Date": "2010-01",
      "scales": 0
    },
    {
      "Date": "2010-02",
      "scales": 1650
    },
    // ... (rest of the flattened data)
    {
      "Date": "2017-01",
      "scales": 145
    },
    {
      "Date": "2017-02",
      "scales": 27
    },
    {
      "Date": "2017-02",
      "scales": 20
    },
    {
      "Date": "2017-02",
      "scales": 107
    },
    {
      "Date": "2017-02",
      "scales": 307
    }
  ];
  

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    },
  };

  return <Area {...config} />;
};

export default DemoArea;