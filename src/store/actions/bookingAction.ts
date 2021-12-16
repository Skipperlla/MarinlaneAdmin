import api from "utils/lib/api";
import { BookingDispatch } from "types/booking";

export const Upcomings = (query: {}) => async (dispatch: BookingDispatch) => {
  dispatch({ type: "ALL_BOOKING_START" });
  await api()
    .get<{ data: any }>("/Admin/Booking/Upcomings", {
      params: { ...query },
    })
    .then((data) => {
      dispatch({
        type: "ALL_BOOKING_SUCCESS",
        payload: data.data,
        status: data.status,
      });
      dispatch({ type: "ALL_BOOKING_RESET" });
    })
    .catch((err) => {
      if (err.response.data.message == "This User Not Found") {
        dispatch({
          type: "ALL_BOOKING_ERROR",
          status: err.response.status || 500,
          payload: err.response.data.message || "Unable to load bookings.",
        });
      } else {
        dispatch({
          type: "ALL_BOOKING_ERROR",
          status: err.response.status || 500,
          payload: err.response.data.message || "Unable to load bookings.",
        });
        dispatch({ type: "ALL_BOOKING_RESET" });
      }
    });
};
export const Pasts = (query: {}) => async (dispatch: BookingDispatch) => {
  dispatch({ type: "ALL_BOOKING_START" });
  await api()
    .get<{ data: any }>(`/Admin/Booking/Pasts`, {
      params: { ...query },
    })
    .then((data) => {
      dispatch({
        type: "ALL_BOOKING_SUCCESS",
        payload: data.data,
        status: data.status,
      });
      dispatch({ type: "ALL_BOOKING_RESET" });
    })
    .catch((err) => {
      dispatch({
        type: "ALL_BOOKING_ERROR",
        status: err.response.status,
        payload: "Unable to load bookings.",
      });
      dispatch({ type: "ALL_BOOKING_RESET" });
    });
};

export const Cancelleds = (query: {}) => async (dispatch: BookingDispatch) => {
  dispatch({ type: "ALL_BOOKING_START" });
  await api()
    .get<{ data: any }>(`/Admin/Booking/Cancelleds`, {
      params: { ...query },
    })
    .then((data) => {
      dispatch({
        type: "ALL_BOOKING_SUCCESS",
        payload: data.data,
        status: data.status,
      });
      dispatch({ type: "ALL_BOOKING_RESET" });
    })
    .catch((err) => {
      dispatch({
        type: "ALL_BOOKING_ERROR",
        status: err.response.status,
        payload: "Unable to load bookings.",
      });
      dispatch({ type: "ALL_BOOKING_RESET" });
    });
};
