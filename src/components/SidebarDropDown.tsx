import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
const SidebarDropDown = () => {
  const dropdown = [
    { label: "Upcoming", target: "/booking/upcoming", icon: "calendar-check" },
    { label: "Past", target: "/booking/past", icon: "calendar-minus" },
    {
      label: "Cancelled",
      target: "/booking/cancelled",
      icon: "calendar-times",
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="relative flex rounded-md cursor-pointer items-center mb-4 hover:bg-gray-200 transition-all mx-auto justify-between"
        style={{ padding: "8px 35px 8px 20px" }}
        onClick={() => setIsOpen(!isOpen)}
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
      {isOpen && (
        <div className="pl-6 bg-transparent text-sm">
          {dropdown.map((item, index) => {
            return (
              <Link href={item.target} key={index}>
                <a
                  style={{ padding: "8px 30px 8px 15px" }}
                  className="text-base flex items-center hover:bg-gray-200 rounded-md cursor-pointer transition-all"
                >
                  <span className="w-5 mr-1">
                    <FontAwesomeIcon
                      icon={item.icon as IconProp}
                      className="text-primary-sideBarIconColor"
                    />
                  </span>
                  <span className="text-primary-sideBarIconColor">
                    {item.label}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SidebarDropDown;
