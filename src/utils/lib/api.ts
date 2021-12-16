import axios from "axios";
import Cookies from "js-cookie";

const api = () => {
  const token = Cookies.get("token");
  return axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://marinlane.herokuapp.com/api/v1"
        : "http://localhost:5000/api/v1",
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  });
};
export default api;
