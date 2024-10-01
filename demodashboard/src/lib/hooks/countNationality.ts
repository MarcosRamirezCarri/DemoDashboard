import { DataEstablishment } from "../Types";

interface NationalityCount {
    nationality: string;
    count: number
  }

export const countNationalityInRange = (arr: DataEstablishment[]) => {

    const nationalityMap: { [key: string]: number } = {}; 

    arr.forEach((obj) => {
      const nationality = obj.guest_nationality || "Unknown";

      nationalityMap[nationality] = (nationalityMap[nationality] || 0) + 1;
    });
    const nationalityArray: NationalityCount[] = Object.entries(nationalityMap).map(
      ([nationality, count]) => ({ nationality, count })
    );

  return nationalityArray;

  };
