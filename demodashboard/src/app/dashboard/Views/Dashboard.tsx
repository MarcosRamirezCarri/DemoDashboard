import { dashboardViews } from "@/lib/DashboardViews";
import DynamicChart from "@/app/Components/ViewsComponents/DynamicCharts";
import { DataEstablishment } from "@/lib/Types";
import { DatePickerComp } from "@/app/Components/ViewsComponents/DatePickerComp";

interface BusinessViewProps {
  data: DataEstablishment[];
  nationalityCount: {
    nationality: string;
    count: number
  }[];
  setSelectedDate: (arg: string) => void;
  selectedDate: any
}

const BusinessView: React.FC<BusinessViewProps> = ({ data, nationalityCount, selectedDate, setSelectedDate }) => {
  return (
    <div className="flex w-[100%] gap-5 p-10 flex-col">
        <div className="flex flex-row">
        <p className="text-2xl justify-self-center ">Metrics and Data</p>
        <DatePickerComp selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        </div>
       
      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        <div className="col-span-2">
        <DynamicChart chartConfig={dashboardViews[0]} data={data} />
        </div>
        <div className="col-span-1">
        <DynamicChart chartConfig={dashboardViews[1]} data={data} />
        </div>
        <div className="col-span-2 row-span-2">
        <DynamicChart chartConfig={dashboardViews[2]} data={data} />
        </div>
        <div className="col-span-1 row-span-2">
        <DynamicChart chartConfig={dashboardViews[3]} data={nationalityCount} />
        </div>
        
        
        
      </div>
    </div>
  );
};

export default BusinessView;
