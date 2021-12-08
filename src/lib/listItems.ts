import moment from "moment";
export const lastSeen = {
  title: "lastSeen",
  values: [
    { label: "Today", value: `${new Date().toISOString()}` },
    { label: "This week", value: "This week" },
    { label: "Last week", value: "Last week" },
    { label: "This month", value: "This month" },
    { label: "Last month", value: "Last month" },
    { label: "Earlier", value: "Earlier" },
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
    title: "Customers",
    target: "/customers",
    icon: "user-friends",
  },
  {
    title: "Leader Board",
    target: "/leaderboard",
    icon: "trophy",
  },
];
export const Bookings = [
  {
    title: "Upcoming",
    target: "/booking/upcoming",
    icon: "calendar-check",
  },
  {
    title: "Past",
    target: "/booking/past",
    icon: "calendar-minus",
  },
  {
    title: "Cancelled",
    target: "/booking/cancelled",
    icon: "calendar-times",
  },
];
