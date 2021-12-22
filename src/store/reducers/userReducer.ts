import { ISingleUser } from "types/customers";
import { UserAction, UserState, IUsers } from "types/user";

const defaultState: UserState = {
  Users: {} as IUsers,
  User: {} as ISingleUser,
  loading: false,
  error: "",
  success: "",
  status: null,
};

const userReducer = (state = defaultState, action: UserAction) => {
  switch (action.type) {
    case "GET_USERS_START":
      return { ...state, loading: true, error: "", success: "", status: null };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        Users: action.payload,
        status: action.status,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        loading: false,
        status: action.status,
        error: action.payload,
      };
    case "GET_USER_RESET":
      return { ...state, loading: false, error: "", success: "", status: null };

    case "LEADER_BOARD_START":
      return { ...state, loading: true, error: "", success: "", status: null };
    case "LEADER_BOARD_SUCCESS":
      return {
        ...state,
        loading: false,
        Users: action.payload,
        status: action.status,
      };
    case "LEADER_BOARD_ERROR":
      return {
        ...state,
        loading: false,
        status: action.status,
        error: action.payload,
      };
    case "LEADER_BOARD_RESET":
      return { ...state, loading: false, error: "", success: "", status: null };

    case "LOGOUT_START":
      return { ...state, error: "", success: "", status: null };

    case "LOGOUT_ERROR":
      return {
        ...state,
        loading: false,
        status: action.status,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
