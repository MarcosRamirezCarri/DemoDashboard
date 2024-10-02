"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DatePickerComp {
  selectedDate: any;
  setSelectedDate: any;
}
const MIN_DATE = new Date();
MIN_DATE.setDate(MIN_DATE.getDate() - 4);

const MAX_DATE = new Date();
MAX_DATE.setDate(MAX_DATE.getDate() + 4);

export const DatePickerComp: React.FC<DatePickerComp> = ({
  selectedDate,
  setSelectedDate,
}) => {

    return (
        <div  className="flex flex-col gap-2 ">
            <p className="text-lg font-semibold" >Filter By Dates</p>
            <div className=" text-xs font-semibold flex flex-col ">
            <p className="text-orange-600" >The date can only start from 2021-01-01</p>
            <p className="font-medium text-orange-400">Be careful if you dont want to make bigger calls</p>
            </div>
            
<Datepicker 
        showFooter={true}
        configs={{ footer: {
            cancel: "Cancel",
            apply: "Search"
        }}}
        disabledDates={[
            {
                startDate: new Date("0-02-02"),
                endDate: new Date("2020-12-31"),
            },
           
        ]}
     
        showShortcuts={false}
            value={selectedDate}
            useRange={false}
            asSingle={true}
            onChange={newValue => setSelectedDate(newValue)}
            primaryColor={"teal"}

        /> 
        </div>
        
    );
};
