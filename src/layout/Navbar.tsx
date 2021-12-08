import React from "react";
import Image from "next/image";
import Dropdown from "@components/Dropdown";
interface INavbar {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}
const Navbar: React.FC<INavbar> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isCollapsed,
  setIsCollapsed,
  width,
}) => {
  return (
    <nav className="h-12 bg-white border-b w-full flex">
      <div className="flex justify-between items-center pr-6 h-full w-full">
        <div className="h-full">
          <button className="h-full flex items-center p-3 mx-2">
            <span className="w-6 h-6">
              <Menu
                className=" w-6 h-6 "
                onClick={() => {
                  if (width > 1200) {
                    setIsCollapsed(!isCollapsed);
                  } else {
                    setIsSidebarOpen(!isSidebarOpen);
                  }
                }}
              />
            </span>
          </button>
        </div>

        <Dropdown />
      </div>
    </nav>
  );
};
function Menu(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="gray"
    >
      <path
        d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
        fill="#1040e2"
      />
      <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
    </svg>
  );
}
export default Navbar;
