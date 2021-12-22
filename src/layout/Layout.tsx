import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "@layout/Sidebar";
import Cookies from "js-cookie";
import { AppState } from "store";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "@utils/lib/messages";
import { useAuth } from "@utils/contexts/useAuth";
import { useRouter } from "next/router";
import { Logout } from "store/actions/userAction";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { system } = useSelector((state: AppState) => state);
  const { setIsShow } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (system.status === 500) {
      Error("Admin Not Found Exiting");
      setIsShow(true);
      dispatch(Logout(router));
    }
  }, [system.status]);
  useEffect(() => {
    router.prefetch("/");
  }, []);
  return (
    <>
      {Cookies.get("authToken") != undefined ? (
        <section className="flex flex-col">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <main className="lg:flex w-full">
            <>
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
              />
              {children}
            </>
          </main>
        </section>
      ) : (
        <div className="flex-1 bg-no-repeat bg-center bg-cover			bg-[url('https://source.unsplash.com/random/1600x900')]	 min-h-screen flex items-center justify-center">
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
