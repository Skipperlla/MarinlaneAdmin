import { ThunkDispatch } from "redux-thunk";

export interface SystemState {
  System: ISystem;
  loading: boolean;
  error: string;
  success: string;
  status: number | null;
}
export interface CustomersAndLeaderBoard {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  totalSpending?: number;
}
export interface ISystem {
  cancelledCount: number;
  pastCount: number;
  upcomingCount: number;
  totalTurnover: number;
  userCount: number;
  leaderBoard: CustomersAndLeaderBoard[];
  newCustomers: CustomersAndLeaderBoard[];
}
interface SYSTEM_START {
  type: "SYSTEM_START";
}

interface SYSTEM_SUCCESS {
  type: "SYSTEM_SUCCESS";
  payload: ISystem;
  status: number;
}
interface SYSTEM_ERROR {
  type: "SYSTEM_ERROR";
  payload: string;
  status: number;
}
interface SYSTEM_RESET {
  type: "SYSTEM_RESET";
}

export type SystemAction =
  | SYSTEM_START
  | SYSTEM_SUCCESS
  | SYSTEM_ERROR
  | SYSTEM_RESET;
export type SystemDispatch = ThunkDispatch<SystemState, void, SystemAction>;
