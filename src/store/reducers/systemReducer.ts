import { SystemAction, SystemState, ISystem } from "types/system";

const defaultState: SystemState = {
  System: {} as ISystem,
  loading: false,
  error: "",
  success: "",
  status: null,
};

const systemReducer = (state = defaultState, action: SystemAction) => {
  switch (action.type) {
    case "SYSTEM_START":
      return { ...state, loading: true, error: "", success: "", status: null };
    case "SYSTEM_SUCCESS":
      return {
        ...state,
        loading: false,
        System: action.payload,
        status: action.status,
      };
    case "SYSTEM_ERROR":
      return {
        ...state,
        loading: false,
        status: action.status,
        error: action.payload,
      };
    case "SYSTEM_RESET":
      return { ...state, loading: false, error: "", success: "", status: null };
    default:
      return state;
  }
};
export default systemReducer;
