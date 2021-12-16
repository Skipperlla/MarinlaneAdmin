import {
  BookingAction,
  BookingState,
  IBookings,
  ISingleBooking,
} from "types/booking";

const defaultState: BookingState = {
  Bookings: {} as IBookings,
  Booking: {} as ISingleBooking,
  loading: false,
  error: "",
  status: null,
  success: "",
};

const bookingReducer = (state = defaultState, action: BookingAction) => {
  switch (action.type) {
    case "ALL_BOOKING_START":
      return {
        ...state,
        loading: true,

        error: "",
        status: null,
        success: "",
      };
    case "ALL_BOOKING_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        Bookings: action.payload,
        status: action.status,
      };
    case "ALL_BOOKING_ERROR":
      return {
        ...state,
        loading: true,
        error: action.payload,
        status: action.status,
      };
    case "ALL_BOOKING_RESET":
      return {
        ...state,
        loading: false,

        error: "",
        status: null,
        success: "",
      };

    default:
      return state;
  }
};

export default bookingReducer;
