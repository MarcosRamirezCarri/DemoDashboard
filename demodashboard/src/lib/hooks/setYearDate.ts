import { DataEstablishment } from "../Types";

interface DataObject extends DataEstablishment {
    uptDate?: string;
  }

export const setYearFromDate = (arr: DataEstablishment[]): DataObject[] => {
    return arr.map((obj) => {
      const dateObj = new Date(obj.date);
      const year = dateObj.getFullYear();
      const day = dateObj.getDate();
      const month = dateObj.getMonth() + 1; 
      const uptDate = `${day}/${month}/${year}`; 
      return {
        ...obj,      
        uptDate,   
      };
    });
    
  };