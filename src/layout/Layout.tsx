import React, { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "@layout/Sidebar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [width, height] = useWindowSize();

  // useEffect(() => {
  //   if (width == 1280) {
  //     setIsCollapsed(true);
  //   }
  //   if (width < 1200) {
  //     setIsCollapsed(false);
  //   }
  // }, [width]);

  return (
    <section className="flex flex-col">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        width={width}
      />

      <main className="lg:flex w-full">
        <>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isCollapsed={isCollapsed}
          />
          {children}
        </>
      </main>
    </section>
  );
};

export default Layout;
