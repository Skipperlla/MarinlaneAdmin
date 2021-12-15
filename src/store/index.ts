import { combineReducers } from "redux";
import { BookingState } from "types/booking";
import { UserState } from "types/user";
import bookingReducer from "./reducers/bookingReducer";

import userReducer from "./reducers/userReducer";

export interface AppState {
  user: UserState;
  booking: BookingState;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  booking: bookingReducer,
});
export default rootReducer;
