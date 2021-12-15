import { NextRouter } from "next/router";
import { ReactNode } from "react";

export interface ISingleUser {
  Login: [{ Date: string; publicV4: string }];
  Logout: [{ Date: string; publicV4: string }];
  createdAt: string;
  email: string;
  firstName: string;
  isBlocked: boolean;
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
export interface IMobilNav {
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;
  isFilter: boolean;
  router: NextRouter;
}
export interface IMobilCard {
  fullName: string;
  totalSpent: number;
  totalBooking: number;
  lastSeen: string;
  uuid: string;
}
export interface ISegment {
  title: string;
  elements: {
    title: string;
    values: [
      {
        label: string;
        value: string;
      }
    ];
  };
  icon: ReactNode;
}
