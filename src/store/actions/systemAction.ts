import api from "utils/lib/api";
import { SystemDispatch } from "types/system";

export const systemInformation = () => async (dispatch: SystemDispatch) => {
  dispatch({ type: "SYSTEM_START" });
  api()
    .get("/Admin/System/systemInformation")
    .then((data) => {
      dispatch({
        type: "SYSTEM_SUCCESS",
        payload: data.data,
        status: data.status,
      });
    })
    .catch((err) => {
      dispatch({
        type: "SYSTEM_ERROR",
        payload: "Unable to load System Information.",
        status: err.response.status,
      });
    });
};
