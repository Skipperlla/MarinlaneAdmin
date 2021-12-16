import React from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bookings, Customers } from "utils/lib/listItems";
import { useRouter } from "next/router";
import SidebarDropDown from "@components/SidebarDropDown";
interface ISidebar {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<ISidebar> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (router.pathname == e.currentTarget.pathname) e.preventDefault();
  }
  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <aside
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
      <div
        style={{
          width: "196px",
          fontSize: "20px",
          padding: "10px",
        }}
        className="hidden lg:block"
      >
        <Link href={"/"}>
          <a
            onClick={handleClick}
            className="flex rounded-md cursor-pointer items-center hover:bg-gray-200 transition-all text-base"
            style={{ padding: "8px 35px 8px 20px" }}
          >
            <span className="w-5 mr-2">
              <FontAwesomeIcon
                icon="th-large"
                className="text-primary-sideBarIconColor"
              />
            </span>
            <span className="text-primary-sideBarIconColor">Dashboard</span>
          </a>
        </Link>
        <SidebarDropDown
          dropDownItems={Bookings}
          title={"Bookings"}
          icon={"calendar-alt"}
        />
        <SidebarDropDown
          dropDownItems={Customers}
          title={"Customers"}
          icon={"users"}
        />
      </div>
      {/* Sidebar */}
      <div
        className={`py-3 pl-3 fixed inset-y-0 left-0 z-30 w-full overflow-y-auto transition duration-200 ease-out transform translate-x-0 bg-white  lg:translate-x-0 lg:static lg:inset-0  block lg:hidden ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="mt-4 flex flex-col text-black">
          <div className=" mt-2 ml-3 cursor-pointer" onClick={closeSidebar}>
            <FontAwesomeIcon icon="times" className="text-xl" />
          </div>
          s
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
