import { dashboardViews } from "@/lib/DashboardViews";
import DynamicChart from "@/app/Components/ViewsComponents/DynamicCharts";
import { DataEstablishment } from "@/lib/Types";
import { DatePickerComp } from "@/app/Components/ViewsComponents/DatePickerComp";

interface BusinessViewProps {
  data: DataEstablishment[];
  bookingCount: {
    bookingType: string;
    count: number;
    percentage: number
  }[];
  nationalityCount: {
    nationality: string;
    count: number;
    percentage: number
  }[];
  setSelectedDate: (arg: string) => void;
  selectedDate: any;
}

const BusinessView: React.FC<BusinessViewProps> = ({
  data,
  nationalityCount,
  selectedDate,
  bookingCount,
  setSelectedDate,
}) => {
  return (
    <div className="flex w-[100%] gap-2 p-5 flex-col">
      <div className="flex justify-evenly flex-row">
        <p className="text-2xl justify-self-center ">Metrics and Data</p>
        <DatePickerComp
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>

      <div className="grid grid-cols-4 gap-2 grid-rows-2">
        <div className="col-span-2 row-span-1">
          <DynamicChart chartConfig={dashboardViews[0]} data={data} />
        </div>
        <div className="col-span-2 row-span-1">
          <DynamicChart chartConfig={dashboardViews[1]} data={data} />
        </div>
        <div className="col-span-2 row-span-2">
          <DynamicChart chartConfig={dashboardViews[2]} data={data} />
        </div>
       
        <div className="col-span-2 grid grid-cols-2 gap-2 row-span-2">
        <DynamicChart
            chartConfig={dashboardViews[3]}
            data={nationalityCount}
          />
          <DynamicChart chartConfig={dashboardViews[4]} data={bookingCount} />
        </div>
      </div>
    </div>
  );
};

export default BusinessView;
