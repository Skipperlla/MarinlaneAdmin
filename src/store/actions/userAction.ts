import api from "@lib/api";
import { UserDispatch } from "types/user";

export const getUser = (query) => async (dispatch: UserDispatch) => {
  dispatch({ type: "GET_USERS_START" });
  api()
    .get<any>("/Admin/User/", { params: query })
    .then((data) => {
      dispatch({
        type: "GET_USER_SUCCESS",
        payload: data.data,
        status: data.status,
      });
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: "GET_USER_ERROR",
        payload: "ERROR",
        status: err.response.status,
      });
    });
};
