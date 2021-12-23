import api from "utils/lib/api";
import { UserDispatch } from "types/user";
import Cookies from "js-cookie";
import { NextRouter } from "next/router";
interface IQuery {
  lastSeen?: string | string[] | undefined;
  perPage?: string | string[] | undefined;
  perLimit?: string | string[] | undefined;
  hasOrdered?: string | string[] | undefined;
  hasNewsletter?: string | string[] | undefined;
  hasBooking?: string | string[] | undefined;
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

export const leaderBoard =
  (query: {
    perPage?: string | string[] | undefined;
    perLimit?: string | string[] | undefined;
  }) =>
  async (dispatch: UserDispatch) => {
    dispatch({ type: "LEADER_BOARD_START" });
    api()
      .get("/Admin/User/leaderBoard", {
        params: query,
      })
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
        dispatch({ type: "LEADER_BOARD_RESET" });
      });
  };

export const Logout =
  (router: NextRouter) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGOUT_START" });
    api()
      .get("/Admin/Auth/Logout")
      .then(() => {
        Cookies.remove("authToken");
        localStorage.clear();
        router.push("/login");
      })
      .catch((err) => {
        dispatch({
          type: "LOGOUT_ERROR",
          payload: err.response.data.message || err.response.data,
          status: err.response.status,
        });
      });
  };
