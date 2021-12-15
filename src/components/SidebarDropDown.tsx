import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarDropDown = () => {
  return (
    <>
      <div
        className="relative flex rounded-md cursor-pointer items-center mb-4 hover:bg-gray-200 transition-all mx-auto justify-between"
        style={{ padding: "8px 35px 8px 20px" }}
      >
        <div className="text-base flex items-center justify-center">
          <span className="w-5 mr-2">
            <FontAwesomeIcon
              icon="th-large"
              className="text-primary-sideBarIconColor"
            />
          </span>
          <span className="text-primary-sideBarIconColor">Bookings</span>
        </div>
        <div className="absolute right-1">
          <FontAwesomeIcon
            icon="chevron-down"
            className="text-sm text-gray-400"
          />
        </div>
      </div>
      <div className="pl-6 bg-transparent text-sm  ">
        <div
          style={{ padding: "8px 30px 8px 15px" }}
          className="hover:bg-gray-200 rounded-md cursor-pointer transition-all"
        >
          <div className="text-base flex items-center justify-center">
            <span className="w-5 mr-1">
              <FontAwesomeIcon
                icon="calendar-check"
                className="text-primary-sideBarIconColor"
              />
            </span>
            <span className="text-primary-sideBarIconColor">Bookings</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarDropDown;
