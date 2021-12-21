import api from "utils/lib/api";
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

export const leaderBoard = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "LEADER_BOARD_START" });
  api()
    .get("/Admin/User/leaderBoard")
    .then((data) => {
      dispatch({
        type: "LEADER_BOARD_SUCCESS",
        payload: data.data,
        status: data.status,
      });
      dispatch({ type: "LEADER_BOARD_RESET" });
    })
    .catch((err) => {
      dispatch({
        type: "LEADER_BOARD_ERROR",
        payload: "Unable to load Leader Board.",
        status: err.response.status,
      });
    });
};
