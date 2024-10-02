"use client";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DatePickerComp {
  selectedDate: any;
  setSelectedDate: any;
}

export const DatePickerComp: React.FC<DatePickerComp> = ({
  selectedDate,
  setSelectedDate,
}) => {
const startDate = new Date("2021-01-01")

    return (
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
            value={selectedDate} 
            onChange={newValue => setSelectedDate(newValue)}
            showShortcuts={true}
        /> 
    );
};
