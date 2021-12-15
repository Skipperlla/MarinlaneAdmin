import api from "@lib/api";
import { UserDispatch } from "types/user";
interface IQuery {
  lastSeen: string;
  perPage: string;
  hasOrdered: string;
  hasNewsletter: string;
  hasBooking: string;
  perLimit: string;
}
export const getUser = (query: IQuery) => async (dispatch: UserDispatch) => {
  dispatch({ type: "GET_USERS_START" });
  api()
    .get("/Admin/User/", {
      params: query,
    })
    .then((data) => {
      dispatch({
        type: "GET_USER_SUCCESS",
        payload: data.data,
        status: data.status,
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_USER_ERROR",
        payload: "Unable to load customers.",
        status: err.response.status,
      });
    });
};
