import React, { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "@layout/Sidebar";
import Cookies from "js-cookie";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      {Cookies.get("token") != undefined ? (
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
