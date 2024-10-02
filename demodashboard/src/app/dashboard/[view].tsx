"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataEstablishment } from "@/lib/Types";
import { countNationalityInRange } from "@/lib/hooks/countNationality";
import { countBookingType } from "@/lib/hooks/countBookingType";
import { setYearFromDate } from "@/lib/hooks/setYearDate";
import { calculateLimitFromDate } from "@/lib/hooks/filterDate";
import BusinessView from "./Views/Dashboard";

interface bookingTypeCount {
  bookingType: string;
  count: number;
  percentage: number
}

interface NationalityCount {
  nationality: string;
  count: number;
  percentage: number;
}

interface Dates {
  startDate: string;
  endDate: string;
}

const Dashboard = () => {
  const [data, setData] = useState<DataEstablishment[]>([]);
  const [nationalityCount, setNationalityCount] = useState<NationalityCount[]>(
    []
  );
  const [bookingCount, setBookingCount] = useState<bookingTypeCount[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dates>({
    startDate: "2021-01-01",
    endDate: "2021-01-10",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedDate) return;
      try {
        const limit: number = calculateLimitFromDate(
          new Date(selectedDate.endDate)
        );
        console.log(limit);

        const response = await axios.get(
          `http://51.89.22.61:5011/api/v1/occupancy?limit=${limit}`
        );

        const dataEs: DataEstablishment[] = response.data;

        const updatedData = setYearFromDate(dataEs);

        setData(updatedData);
        const nationality = countNationalityInRange(updatedData);
        const bookingType = countBookingType(updatedData);
        setBookingCount(bookingType);
        setNationalityCount(nationality);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, [selectedDate]);

  console.log(nationalityCount, bookingCount)

  return (
    <div className="flex flex-col top-20 relative">
      <BusinessView
        data={data}
        nationalityCount={nationalityCount}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        bookingCount={bookingCount}
      />
    </div>
  );
};

export default Dashboard;
