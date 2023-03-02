import { Radar } from "react-chartjs-2";
import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
export const data = {
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    datasets: [
        {
            label: "# of Votes",
            data: [2, 4, 7, 7, 3, 3, 5, 2, 3],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            width: 150,
            height: 150,
        },
    ],
};
const CustomRadar = () => {
    return <Radar data={data} />;
};

export default CustomRadar;
