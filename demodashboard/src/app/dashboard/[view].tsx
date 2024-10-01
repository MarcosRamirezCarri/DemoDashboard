"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataEstablishment } from "@/lib/Types";
import { countNationalityInRange } from "@/lib/hooks/countNationality";
import { setYearFromDate } from "@/lib/hooks/setYearDate";
import BusinessView from "./Views/Dashboard";

interface NationalityCount {
  nationality: string;
  count: number
}

const Dashboard = () => {
  const [data, setData] = useState<DataEstablishment[]>([]);
  const [nationalityCount, setNationalityCount] = useState<NationalityCount[]>([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://51.89.22.61:5011/api/v1/occupancy?limit=20"
        );
        const dataEs: DataEstablishment[] = response.data;

        const updatedData = setYearFromDate(dataEs);

        setData(updatedData);
        const nationality = countNationalityInRange(updatedData);

        setNationalityCount(nationality);
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  


 

  return (
    <div className="relative top-20 flex flex-row">
      <BusinessView data={data} nationalityCount={nationalityCount} />
    </div>
  );
};

export default Dashboard;
