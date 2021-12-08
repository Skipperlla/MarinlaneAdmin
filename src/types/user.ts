import { ThunkDispatch } from "redux-thunk";
import { IBooking } from "./booking";
export interface UserState {
  Users: IUser[];
  User: {};
  loading: boolean;
  error: string;
  success: string;
  status: number | null;
}
export interface IUser {
  _id: string;
  fullName: string;
  notification: boolean;
  isBlocked: boolean;
  title: string;
  totalSpending: number;
  totalBooking: number;
  newUser: boolean;
  bookings: IBooking[];
}
interface GET_USERS_START {
  type: "GET_USERS_START";
}
interface GET_USER_SUCCESS {
  type: "GET_USER_SUCCESS";
  payload: IBooking[];
  success: string;
  status: number;
}
interface GET_USER_ERROR {
  type: "GET_USER_ERROR";
  payload: string;
  status: number;
}
interface GET_USER_RESET {
  type: "GET_USER_RESET";
}

export type UserAction =
  | GET_USERS_START
  | GET_USER_SUCCESS
  | GET_USER_ERROR
  | GET_USER_RESET;
export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
