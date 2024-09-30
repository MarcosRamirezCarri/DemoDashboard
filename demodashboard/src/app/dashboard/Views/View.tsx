import DonutComponent from "./ViewsComponents/DonutComp";
import BarChartComponent from "./ViewsComponents/BarComponent";
import LineComponent from "./ViewsComponents/LineComp";
import ListComponent from "./ViewsComponents/ListComponent";

const BusinessView = () =>{
    return(
        <div className="flex w-[90%] flex-col">
            <div className="grid grid-cols-3 grid-rows-2 gap-5">
                <DonutComponent/>
                <BarChartComponent/>
                <LineComponent/>
                <ListComponent/>
            </div>
            

        </div>
    )
}

export default BusinessView;