import React from "react";
import Link from "next/link";
import Dropdown from "@components/Dropdown";

const Navbar: React.FC = () => {
  return (
    <nav className="h-12 bg-white border-b w-full flex">
      <div className="flex justify-between items-center pr-6 h-full w-full">
        <div className="h-full">
          <div className="h-full flex items-center p-3 mx-2">
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
