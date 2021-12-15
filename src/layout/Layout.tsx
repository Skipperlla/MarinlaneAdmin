import React, { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "@layout/Sidebar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <section className="flex flex-col">
      <Navbar />
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
  );
};

export default Layout;
