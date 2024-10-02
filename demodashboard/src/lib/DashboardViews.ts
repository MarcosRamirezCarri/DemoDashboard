export const dashboardViews: any = 
    [
        { type: 'area', title: 'Room Rate', field: 'room_rate', index:'uptDate' },
        { type: 'line', title: 'Occupancy Rate', field: 'occupancy_rate', index:'uptDate' },
        { type: 'bar', title: 'Booking and Cancellation rate', field: ['booking_lead_time', 'cancellation_rate'], index:'uptDate' },
        { type: 'donut', title: 'Average Guest Nationality', field: 'percentage', index: 'nationality' },
        { type: 'donut', title: 'Average Booking type', field: 'percentage', index: 'bookingType' },
      ];
  ;