import moment from "moment";
export const lastSeen = {
  title: "lastSeen",
  values: [
    { label: "Today", value: new Date().toISOString() },
    {
      label: "This week",
      value: moment().subtract(1, "weeks").endOf("week").toISOString(),
    },
    {
      label: "Last week",
      value: moment().subtract(1, "weeks").startOf("week").toISOString(),
    },
    {
      label: "This month",
      value: moment().subtract(1, "month").endOf("month").toISOString(),
    },
    {
      label: "Last month",
      value: moment().subtract(1, "month").startOf("month").toISOString(),
    },
    {
      label: "Earlier",
      value: new Date(new Date().setMonth(10)).toISOString(),
    },
  ],
};
export const hasOrdered = {
  title: "hasOrdered",
  values: [
    { label: "Yes", value: "gt" },
    { label: "No", value: "lt" },
  ],
};
export const hasBooking = {
  title: "hasBooking",
  values: [
    { label: "Yes", value: "gt" },
    { label: "No", value: "lt" },
  ],
};
export const hasNewsletter = {
  title: "hasNewsletter",
  values: [
    { label: "Yes", value: "gt" },
    { label: "No", value: "lt" },
  ],
};
export const Customers = [
  {
    label: "Customers",
    target: "/customers",
    icon: "user-friends",
  },
  {
    label: "Leader Board",
    target: "/leaderboard",
    icon: "trophy",
  },
];
export const Bookings = [
  {
    label: "Upcoming",
    target: "/booking/upcoming",
    icon: "calendar-check",
  },
  {
    label: "Past",
    target: "/booking/past",
    icon: "calendar-minus",
  },
  {
    label: "Cancelled",
    target: "/booking/cancelled",
    icon: "calendar-times",
  },
];
export const colorPalet = [
  { value: "all", color: "text-gray-300 font-semibold" },
  { value: "confirmed", color: "text-green-500 font-semibold" },
  { value: "completed", color: "text-green-500 font-semibold" },
  { value: "ongoing", color: "text-gray-500 font-semibold" },
  { value: "canceled", color: "text-red-500 font-semibold" },
];
export function colorFilter(color: string) {
  return colorPalet.filter((i) => {
    return i.value === color;
  });
}
