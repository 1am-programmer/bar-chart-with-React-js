import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, //For the Y axis
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const App = () => {
  const data = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js"],
    datasets: [
      {
        label: "Bar Chart of skills",
        data: [90, 80, 60, 65, 40, 60],
        backgroundColor: ["blue", "brown", "yellow", "cyan", "red", "purple"],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Bar Chart of skills left to learn",
        data: [10, 20, 40, 35, 60, 40],
        backgroundColor: ["red", "purple", "brown", "blue", "yellow", "cyan"],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className=" flex justify-center items-center mx-auto h-[400px] mt-40">
      <Bar
        style={{ width: "70%", padding: "20px" }}
        data={data}
        options={options}
      ></Bar>
    </div>
  );
};

export default App;

// import React, { useRef } from "react";
// import Chart from "chart.js/auto";
// import { useEffect } from "react";

// const App = () => {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);
//   useEffect(() => {
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }
//     const myChartRef = chartRef.current.getContext("2d");
//     //   Meaning of dot current
//     chartInstance.current = new Chart(myChartRef, {
//       type: "bar",
//       data: {
//         labels: ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js"],
//         datasets: [
//           {
//             data: [100, 80, 60, 65, 40, 60],
//             backgroundColor: [
//               "brown",
//               "blue",
//               "yellow",
//               "cyan",
//               "red",
//               "purple",
//             ],
//             hoverOffset: 6,
//           },
//         ],
//       },
//     });
//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div className="min-w-full  ">
//       <div className="max-w-sm flex justify-center items-center">
//         <canvas ref={chartRef} style={{ width: "500px", height: "500px" }} />
//       </div>
//     </div>
//   );
// };

// export default App;
