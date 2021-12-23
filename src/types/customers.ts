import { NextRouter } from "next/router";
import { ReactNode } from "react";

export interface ISingleUser {
  Login: [{ Date: string; publicV4: string }];
  Logout: [{ Date: string; publicV4: string }];
  avatar: string;
  createdAt: string;
  email: string;
  firstName: string;
  isBlocked: boolean;
  lastSeen: number;
  lastName: string;
  newUser: boolean;
  notification: boolean;
  phoneNumber: string;
  title: string;
  totalBooking: number;
  totalSpending: number;
  _id: string;
  userSpecialInformation: {
    Login: string;
    Logout: string;
    location: {
      area: number;
      city: string;
      country: string;
      eu: string;
      ll: number[];
      metro: number;
      range: number[];
      region: string;
      timezone: string;
    };
    publicV4: string;
    type: string;
    user: { _id: string; role: string; name: string };
  };
}
export interface IMobilFilter {
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;
  isFilter: boolean;
  router: NextRouter;
  count: number;
}
export interface IMobilCustomer {
  fullName: string;
  title: string;
  phoneNumber: string;
  createdAt: string;
  uuid: string;
  avatar: string;
}
