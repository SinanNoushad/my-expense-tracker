import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const IncomeExpenseChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const data = [
      { Month: "Jan", Income: 5000, Expense: 5200 }, // Expense > Income
      { Month: "Feb", Income: 5500, Expense: 5000 }, // Income > Expense
      { Month: "Mar", Income: 4800, Expense: 5100 }, // Expense > Income
      { Month: "Apr", Income: 5300, Expense: 4900 }, // Income > Expense
      { Month: "May", Income: 5200, Expense: 5300 }, // Expense > Income
      { Month: "Jun", Income: 5600, Expense: 5500 }, // Income > Expense
      { Month: "Jul", Income: 5700, Expense: 5800 }, // Expense > Income
      { Month: "Aug", Income: 6000, Expense: 5700 }, // Income > Expense
      { Month: "Sep", Income: 5900, Expense: 6100 }, // Expense > Income
      { Month: "Oct", Income: 6200, Expense: 6000 }, // Income > Expense
      { Month: "Nov", Income: 6100, Expense: 6300 }, // Expense > Income
      { Month: "Dec", Income: 6500, Expense: 6400 }, // Income > Expense
    ];

    const option = {
      //   title: {
      //     text: "Monthly Income vs Expense (2024)",
      //   },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Income", "Expense"],
      },
      xAxis: {
        type: "category",
        data: data.map((item) => item.Month),
      },
      yAxis: {
        type: "value",
        name: "Amount ($)",
      },
      series: [
        {
          name: "Income",
          type: "line",
          data: data.map((item) => item.Income),
          itemStyle: { color: "blue" },
          smooth: false,
        },
        {
          name: "Expense",
          type: "line",
          data: data.map((item) => item.Expense),
          itemStyle: { color: "red" },
          smooth: false,
        },
      ],
    };

    chartInstance.setOption(option);

    const handleResize = () => chartInstance.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={chartRef} className="w-full h-full " />;
};

export default IncomeExpenseChart;
