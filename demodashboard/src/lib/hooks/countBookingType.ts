import { DataEstablishment } from "../Types";

interface bookingTypeCount {
    bookingType: string;
    count: number;
    percentage: number
  }

export const countBookingType = (arr: DataEstablishment[]) => {

  const bookingTypeMap: { [key: string]: number } = {};

  arr.forEach((obj) => {
    const booking = obj.booking_channel || "Unknown";
    bookingTypeMap[booking] = (bookingTypeMap[booking] || 0) + 1;
  });

  const totalBookings = arr.length;

  const bookingTypeArray: bookingTypeCount[] = Object.entries(bookingTypeMap).map(
    ([bookingType, count]) => ({
      bookingType,
      count,
      percentage: Math.round((count / totalBookings) * 100)
    })
  );

  return bookingTypeArray;

  };