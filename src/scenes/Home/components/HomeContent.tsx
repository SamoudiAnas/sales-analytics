import { faker } from "@faker-js/faker";
import { Button } from "@/components/common/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@common/Select";
import { ArrowUp, Download } from "lucide-react";
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
import LineChart from "@/components/common/LineChart/LineChart";
import { CHART_OPTIONS } from "@/constants/chart";
import { colors } from "@/constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function HomeContent() {
  return (
    <div className="pt-8 pl-16">
      <div className="flex justify-between items-center pr-16">
        <Select defaultValue="this-year">
          <SelectTrigger label="Show:" className="max-w-xs">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-year">This Year</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Button rounded="inputSize" withIcon={true} Icon={<Download />}>
          <span>Generate Report</span>
        </Button>
      </div>

      <div className="p-8 mt-8 bg-grey-100/5 rounded-l-3xl">
        <h2 className="font-bold text-xl mb-6">Analytics Overview</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col  justify-center items-center rounded-2xl py-8"
            >
              <p className="uppercase font-bold tracking-widest text-sm">
                SALES
              </p>
              <p className="mt-3 font-bold text-3xl">$21.2K</p>
              <p className="mt-1 text-grey-100 font-bold">($15.8k) last year</p>
              <div className="flex gap-2 mt-6">
                <ArrowUp className="text-green-100" />
                <p className="text-green-100 font-bold">105.23%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 mt-8 bg-grey-100/5 rounded-l-3xl">
        <h2 className="font-bold text-xl mb-6">Sales Figures</h2>

        <LineChart data={data} />
      </div>
    </div>
  );
}

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data: ChartData<"line", number[], string> = {
  labels,
  datasets: [
    {
      borderColor: colors.GREEN,
      pointBackgroundColor: colors.GREEN,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      ...CHART_OPTIONS,
    },
    {
      borderColor: colors.PURPLE,
      pointBackgroundColor: colors.PURPLE,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      ...CHART_OPTIONS,
    },
  ],
};
