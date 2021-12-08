import { IUser, UserAction, UserState } from "types/user";

const defaultState: UserState = {
  Users: [],
  User: {} as IUser,
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
        success: action.success,
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
    default:
      return state;
  }
};
export default userReducer;
