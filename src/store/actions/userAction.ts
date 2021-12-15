import api from "@lib/api";
import { UserDispatch } from "types/user";
interface IQuery {
  lastSeen?: string | string[] | undefined;
  perPage?: string | string[] | undefined;
  hasOrdered?: string | string[] | undefined;
  hasNewsletter?: string | string[] | undefined;
  hasBooking?: string | string[] | undefined;
  perLimit?: string | string[] | undefined;
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
