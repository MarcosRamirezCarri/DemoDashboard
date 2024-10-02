export const calculateLimitFromDate = (selectedDate: Date) => {
    const startDate = new Date("2021-01-01"); 
    const diffTime = Math.abs(selectedDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  }