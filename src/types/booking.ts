import { ThunkDispatch } from "redux-thunk";
export interface BookingState {
  Bookings: [];
  Booking: {};
  loading: boolean;
  error: string;
  success: string;
  status: null | number;
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
  priceList: IPriceList[];
  totalPrice: number;
  createdAt: string;
  uuid: string;
}
interface IPriceList {
  title: string;
  pay: number;
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
