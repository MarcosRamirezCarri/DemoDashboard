import { DataEstablishment } from "../Types";

interface NationalityCount {
  nationality: string;
  count: number;
  percentage: number;
}

export const countNationalityInRange = (arr: DataEstablishment[]) => {
  const nationalityMap: { [key: string]: number } = {};

  arr.forEach((obj) => {
    const booking = obj.guest_nationality || "Unknown";
    nationalityMap[booking] = (nationalityMap[booking] || 0) + 1;
  });


  const totalNation = arr.length;
  const nationalityArray: NationalityCount[] = Object.entries(
    nationalityMap
  ).map(([nationality, count]) => ({
    nationality,
    count,
    percentage: Math.round((count / totalNation) * 100),
  }));

  return nationalityArray;
};
