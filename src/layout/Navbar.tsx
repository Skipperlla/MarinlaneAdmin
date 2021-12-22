import React from "react";
import Link from "next/link";
import Dropdown from "@components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar: React.FC<{
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <nav className="h-12 bg-white border-b w-full flex">
      <div className="flex items-center justify-center pl-6 lg:hidden">
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className="text-2xl flex items-center justify-center text-gray-400"
        >
          <FontAwesomeIcon icon="bars" />
        </button>
      </div>
      <div className="flex justify-between items-center pr-6 h-full w-full">
        <div className="h-full">
          <div className="hidden lg:flex h-full  items-center p-3 mx-2   ">
            <Link href="/">
              <a className="text-xl">Marinlane</a>
            </Link>
          </div>
        </div>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
