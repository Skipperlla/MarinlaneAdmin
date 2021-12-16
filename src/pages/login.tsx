import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Spinner from "@components/Spinner";
import axios from "axios";
import { Error } from "utils/lib/messages";
import { useAuth } from "utils/contexts/useAuth";
const login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState({ email: "", password: "" });
  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    if (Cookies.get("token") != undefined) router.push("/");
  }, []);
  useEffect(() => {
    router.prefetch("/");
  }, []);
  const { setIsShow } = useAuth();

  return (
    <div className="w-full lg:px-2">
      <form
        method="POST"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          await axios
            .post(
              `${
                process.env.NODE_ENV === "production"
                  ? "https://marinlane.herokuapp.com/api/v1"
                  : "http://localhost:5000/api/v1"
              }/Admin/Auth/signIn`,
              form
            )
            .then((data) => {
              Cookies.set("token", data.data.access_token, { expires: 365 });
              localStorage.setItem("me", JSON.stringify(data.data.user));
              router.push("/");
            })
            .catch((err) => {
              setIsShow(true);
              Error(err.response.data.message || err.response.data);
              setIsLoading(false);
            });
        }}
        className="rounded border  mx-auto lg:border shadow lg:px-9   bg-white p-4 lg:rounded-lg max-w-md w-full lg:border-primary-bookingsBorder"
      >
        <h3 className="text-3xl mb-6">Login</h3>

        <div className="mb-5">
          <span className="text-primary-bookingIcon text-sm  font-semibold mb-3">
            <label>Email</label>
          </span>
          <input
            autoComplete="off"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name={"email"}
            required
            className="focus:border-black  border h-10 px-3 border-primary-changePassword focus:outline-none w-full"
          />
        </div>
        <div className="mb-5">
          <label className="text-primary-bookingIcon text-sm  font-semibold">
            Password
          </label>
          <input
            autoComplete="off"
            type="password"
            onChange={handleChange}
            placeholder="••••••••"
            name="password"required
            className="lg:mr-3 mb-6 lg:mb-0 w-full focus:border-black  border h-10 px-3 border-primary-changePassword focus:outline-none"
          />
        </div>

        <div className="h-10 w-full mb-4">
          <button
            className="border border-black text-white w-full bg-black h-full text-lg"
            type="submit"
            disabled={isLoading}
          >
            <span
              className={`${isLoading && "flex items-center justify-center"}`}
            >
              {isLoading ? <Spinner type="TailSpin" w={35} h={35} /> : "Login"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default login;
