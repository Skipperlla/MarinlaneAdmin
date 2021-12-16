import { toast } from "react-toastify";
export const Info = (message: string) => {
  toast.info(message, {
    position: "bottom-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};
export const Success = (message: string) => {
  toast.success(message, {
    position: "bottom-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};
export const Warning = (message: string) => {
  toast.warn(message, {
    position: "bottom-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};
export const Error = (message: string) => {
  toast.error(message, {
    position: "bottom-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};
