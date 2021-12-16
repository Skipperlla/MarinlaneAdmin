import { ThunkDispatch } from "redux-thunk";
import { IPagination } from "./user";
export interface BookingState {
  Bookings: any; //Tekrar Bakılcak
  Booking: ISingleBooking;
  loading: boolean;
  error: string;
  success: string;
  status: null | number;
}
export interface IBookings {
  count: number;
  data: IBooking[];
  pagination: IPagination;
}
export interface ISingleBooking {
  Date: string;
  Time: string;
  atDate: string;
  atIso: number;
  avgPay: number;
  bookingName: string;
  createdAt: string;
  dropOff: string;
  options: string;
  dropOffAirportCheck: boolean;
  dropOffPlaceId: string;
  duration: string;
  matrixMinute: number;
  mi: number;
  owner: {
    createdAt: string;
    email: string;
    firstName: string;
    lastName: string;
    fullName: string;
    newUser: boolean;
    notification: boolean;
    phoneNumber: string;
    role: string;
    title: string;
    _id: string;
  };
  pickup: string;
  pickupAirportCheck: boolean;
  pickupPlaceId: string;
  priceList: [
    {
      title: string;
      pay: number;
    }
  ];
  rides: string;
  status: string;
  stop: number;
  totalPrice: number;
  uuid: string;
  vehicleClass: string;
  _id: string;
}

export interface IBooking {
  _id: string;
  pickup: string;
  pickupPlaceId: string;
  dropOff: string;
  dropOffPlaceId: string;
  Date: string;
  atDate: string;
  atIso: number;
  Time: string;
  vehicleClass: string;
  bookingName: string;
  stop: number;
  rides: string;
  status: string;
  pickupAirportCheck: boolean;
  dropOffAirportCheck: boolean;
  avgPay: number;
  duration: string;
  mi: number;
  matrixMinute: number;
  priceList: [
    {
      title: string;
      pay: number;
    }
  ];
  totalPrice: number;
  createdAt: string;
  uuid: string;
}

interface ALL_BOOKING_START {
  type: "ALL_BOOKING_START";
}
interface ALL_BOOKING_SUCCESS {
  type: "ALL_BOOKING_SUCCESS";
  payload: { data: any };
  status: number;
}
interface ALL_BOOKING_ERROR {
  type: "ALL_BOOKING_ERROR";
  status: number;
  payload: string;
}
interface ALL_BOOKING_RESET {
  type: "ALL_BOOKING_RESET";
}
export type BookingAction =
  | ALL_BOOKING_START
  | ALL_BOOKING_SUCCESS
  | ALL_BOOKING_ERROR
  | ALL_BOOKING_RESET;

export type BookingDispatch = ThunkDispatch<BookingState, void, BookingAction>;
