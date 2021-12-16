import React from "react";
import Link from "next/link";
import Dropdown from "@components/Dropdown";

const Navbar: React.FC<{
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <nav className="h-12 bg-white border-b w-full flex">
      <div className="flex justify-between items-center pr-6 h-full w-full">
        <div className="h-full">
          <div className="h-full flex items-center p-3 mx-2   lg:block">
            <Link href="/">
              <a className="text-xl">Marinlane</a>
            </Link>
          </div>
        </div>
        <div>
          <button>bas</button>
        </div>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
