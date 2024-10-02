import dynamic from "next/dynamic";
import { DonutChart } from "../Charts/DonutChart";
import { AreaChart } from "../Charts/AreaChart";
import { BarChart } from "../Charts/BarChart";
import { LineChart } from "../Charts/LineChart";
import { DataEstablishment } from "@/lib/Types";

interface DynamicChartProp {
  data:
    | DataEstablishment[]
    | {
        bookingType: string;
        count: number;
        percentage: number
      }[]
    | {
        nationality: string;
        count: number;
        percentage: number
      }[];
  chartConfig: {
    type: "line" | "bar" | "area" | "donut";
    title: string;
    field: string;
    index: string;
  };
}

const DynamicChart: React.FC<DynamicChartProp> = ({ data, chartConfig }) => {
  return (
    <div>
      {data.length > 0 ? (
        <div className="flex flex-col bg-blue-50 justify-center p-5 items-center rounded-md shadow-xl">
          <p>{chartConfig.title}</p>
          {chartConfig.type === "area" ? (
            <AreaChart
              data={data}
              
              index={chartConfig.index}
              categories={[chartConfig.field]}
              yAxisWidth={40}
              startEndOnly
              connectNulls
              showLegend={false}
              showTooltip={true}
            />
          ) : chartConfig.type === "bar" ? (
            <BarChart
              data={data}
              index={chartConfig.index}
              
              categories={chartConfig.field}
              yAxisWidth={40}
              startEndOnly
              connectNulls
              showLegend={false}
              showTooltip={true}
            />
          ) : null}
          {chartConfig.type === "donut" ? (
         
 <DonutChart
              variant="pie"
              data={data}
              valueFormatter={(number: number) =>
                `${Intl.NumberFormat().format(number).toString()}%`
              }
              category={chartConfig.index}
              value={chartConfig.field}
            />
           
 
           
          ) : null}
          {chartConfig.type === "line" ? (
            <LineChart
              data={data}
    
              categories={[chartConfig.field]}
              index={chartConfig.index}
              valueFormatter={(number: number) =>
                `${Intl.NumberFormat().format(number).toString()}HS`
              }
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default DynamicChart;
