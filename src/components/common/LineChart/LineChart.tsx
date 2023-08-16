import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { colors } from "@/constants/colors";
import { DEFAULT_FONT_FAMILY } from "@/constants/globals";
import shadowPlugin from "@/plugins/chart-shadow";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: ChartData<"line", number[], string>;
}

export default function LineChart({ data }: LineChartProps) {
  return (
    <Line
      options={{
        responsive: true,
        elements: {
          point: {
            borderWidth: 2,
            hoverBorderWidth: 2,
            borderColor: colors.WHITE,
          },
        },

        plugins: {
          legend: {
            display: false,
            position: "top" as const,
          },
          title: {
            display: false,
            text: "Chart.js Line Chart",
          },
          //@ts-expect-error
          customCanvasBackgroundColor: {
            color: colors.WHITE,
          },

          tooltip: {
            boxWidth: 0,
            padding: 16,
            

            usePointStyle: false,
            backgroundColor: colors.LIGHTGREY,

            titleColor: colors.GREY,
            titleAlign: "center",
            titleFont: {
              family: DEFAULT_FONT_FAMILY,
              size: 14,
            },

            bodyAlign: "center",
            bodyColor: colors.DARK,
            bodyFont: {
              family: DEFAULT_FONT_FAMILY,
              weight: "700",
              size: 24,
            },

            xAlign: "center",
            yAlign: "bottom",

            callbacks: {
              beforeLabel: (t) =>
                `${Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 1,
                }).format(Number(t.formattedValue))}`,
              label: (t) => "",
              labelPointStyle: (ctx) => {
                return {
                  pointStyle: "line",
                  rotation: 0,
                };
              },
            },
          },
        },
      }}
      data={data}
      plugins={[
        {
          //ref:
          id: "customCanvasBackgroundColor",
          beforeDraw: (chart, args, options) => {
            const { ctx } = chart;
            ctx.save();
            ctx.globalCompositeOperation = "destination-over";
            ctx.fillStyle = options.color || "#99ffff";
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
          },
        },
        shadowPlugin,
      ]}
    />
  );
}
