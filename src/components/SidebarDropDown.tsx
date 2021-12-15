import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { motion } from "framer-motion";

const SidebarDropDown = ({ dropDownItems, header }) => {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.2,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.2,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <>
      <div
        className="relative flex rounded-md cursor-pointer items-center mb-4 hover:bg-gray-200 transition-all mx-auto justify-between"
        style={{ padding: "8px 35px 8px 20px" }}
      >
        <motion.div
          onClick={toggleHoverMenu}
          className="text-base flex items-center justify-center"
        >
          <span className="w-5 mr-2">
            <FontAwesomeIcon
              icon="th-large"
              className="text-primary-sideBarIconColor"
            />
          </span>
          <span className="text-primary-sideBarIconColor">{header}</span>
        </motion.div>
        <div className="absolute right-1">
          <FontAwesomeIcon
            icon="chevron-down"
            className="text-sm text-gray-400"
          />
        </div>
      </div>

      <div className="pl-6 bg-transparent text-sm">
        {dropDownItems.map((item, index) => {
          return (
            <motion.div
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
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
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SidebarDropDown;
