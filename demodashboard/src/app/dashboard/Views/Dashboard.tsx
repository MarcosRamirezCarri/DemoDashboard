import { dashboardViews } from "@/lib/DashboardViews";
import DynamicChart from "@/app/Components/ViewsComponents/DynamicCharts";
import { DataEstablishment } from "@/lib/Types";
import DonutComponent from "@/app/Components/ViewsComponents/DonutComp";

interface BusinessViewProps {
  data: DataEstablishment[];
  nationalityCount: any
}

const BusinessView: React.FC<BusinessViewProps> = ({ data, nationalityCount }) => {
  return (
    <div className="flex w-[100%] gap-5 p-10 flex-col">
        <div className="flex flex-row">
        <p className="text-2xl justify-self-center ">Metrics and Data</p>
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
