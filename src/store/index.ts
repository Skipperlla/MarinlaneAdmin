import { combineReducers } from "redux";
import { BookingState } from "types/booking";
import { SystemState } from "types/system";
import { UserState } from "types/user";
import bookingReducer from "./reducers/bookingReducer";
import systemReducer from "./reducers/systemReducer";

import userReducer from "./reducers/userReducer";

export interface AppState {
  user: UserState;
  booking: BookingState;
  system: SystemState;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  booking: bookingReducer,
  system: systemReducer,
});
export default rootReducer;
