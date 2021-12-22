import { ISubCard } from "@components/LeaderBoard/SubCard";
import { ThunkDispatch } from "redux-thunk";
import { ISingleUser } from "./customers";

export interface UserState {
  Users: IUsers;
  User: ISingleUser;
  loading: boolean;
  error: string;
  success: string;
  status: number | null;
}
export interface IUsers {
  count: number;
  data: ICustomers[];
  pagination: IPagination;
  topTen: ITopTen;
  topThree: ITopThree;
}

interface ITopTen {
  data: ISubCard[];
  count: number;
  pagination: IPagination;
}
interface ITopThree {
  data: ISubCard[];
  count: number;
}

export interface ICustomers {
  _id: string;
  avatar: string;
  totalSpending: number;
  totalBooking: number;
  title: string;
  role: string;
  phoneNumber: string;
  notification: boolean;
  newUser: boolean;
  lastName: string;
  isBlocked: boolean;
  fullName: string;
  firstName: string;
  email: string;
  lastSeen: string;
  bookings: [{ createdAt: string; _id: string }];
}
export interface IPagination {
  next: { page: number; limit: number };
  prev: { page: number; limit: number };
}
interface GET_USERS_START {
  type: "GET_USERS_START";
}
interface GET_USER_SUCCESS {
  type: "GET_USER_SUCCESS";
  payload: {
    count: number;
    data: ICustomers[];
    pagination: IPagination;
  };
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
interface LEADER_BOARD_START {
  type: "LEADER_BOARD_START";
}

interface LEADER_BOARD_SUCCESS {
  type: "LEADER_BOARD_SUCCESS";
  payload: {
    count: number;
    data: ICustomers[];
  };
  status: number;
}

interface LOGOUT_START {
  type: "LOGOUT_START";
}
interface LOGOUT_ERROR {
  type: "LOGOUT_ERROR";
  status: number;
  payload: string;
}

interface LEADER_BOARD_ERROR {
  type: "LEADER_BOARD_ERROR";
  payload: string;
  status: number;
}
interface LEADER_BOARD_RESET {
  type: "LEADER_BOARD_RESET";
}

export type UserAction =
  | GET_USERS_START
  | GET_USER_SUCCESS
  | GET_USER_ERROR
  | GET_USER_RESET
  | LEADER_BOARD_START
  | LEADER_BOARD_SUCCESS
  | LEADER_BOARD_ERROR
  | LEADER_BOARD_RESET
  | LOGOUT_START
  | LOGOUT_ERROR;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
