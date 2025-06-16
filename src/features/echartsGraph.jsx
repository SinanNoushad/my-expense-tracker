import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const EchartsGraph = ({
  data = [820, 932, 901, 934, 1290, 1330, 1320],
  lineColor = "#16a34a", // green-600
  gradientFrom = "rgba(22, 163, 74, 0.3)", // green-500 @ 30%
  gradientTo = "rgba(22, 163, 74, 0)", // transparent
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
      },
      series: [
        {
          data,
          type: "line",
          smooth: true,
          symbol: "none",
          lineStyle: {
            width: 2,
            color: lineColor,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: gradientFrom,
              },
              {
                offset: 1,
                color: gradientTo,
              },
            ]),
          },
          animationDuration: 1000,
          animationEasing: "cubicOut",
        },
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltip: { show: false },
      title: { show: false },
    };

    chartInstance.setOption(option);
    const handleResize = () => chartInstance.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [data, lineColor, gradientFrom, gradientTo]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default EchartsGraph;


