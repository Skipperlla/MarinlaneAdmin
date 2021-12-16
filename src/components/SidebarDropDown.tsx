import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { motion } from "framer-motion";
interface IDropDownItems {
  icon: string;
  title: string;
  target: string;
}
interface ISidebarDropDown {
  dropDownItems: IDropDownItems[];
  title: string;
  icon: IconProp;
  handleClick: any;
}
const SidebarDropDown: React.FC<ISidebarDropDown> = ({
  dropDownItems,
  title,
  icon,
  handleClick,
}) => {
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
      <motion.div
        onClick={toggleHoverMenu}
        className="relative flex rounded-md cursor-pointer items-center  hover:bg-gray-200 transition-all mx-auto justify-between"
        style={{ padding: "8px 35px 8px 20px" }}
      >
        <div className="text-2xl lg:text-base flex items-center justify-center">
          <span className="w-5 lg:mr-2 mr-5">
            <FontAwesomeIcon
              icon={icon as IconProp}
              className="text-primary-sideBarIconColor"
            />
          </span>
          <span className="text-primary-sideBarIconColor">{title}</span>
        </div>
        <div className="absolute right-1">
          <FontAwesomeIcon
            icon="chevron-down"
            className={`lg:text-sm text-xl text-gray-400 transition-all transform ${
              isHover && "rotate-180"
            }`}
          />
        </div>
      </motion.div>

      <div className="pl-6 bg-transparent">
        {dropDownItems.map((item, index: number) => {
          return (
            <motion.div
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
              className="w-full"
              onClick={() => toggleHover(false)}
              key={index}
            >
              <Link href={item.target}>
                <a
                  onClick={handleClick}
                  className="w-full py-2 px-4 lg:text-base text-xl flex items-center hover:bg-gray-200 rounded-md cursor-pointer transition-all"
                >
                  <span className="w-5 mr-2">
                    <FontAwesomeIcon
                      icon={item.icon as IconProp}
                      className="text-primary-sideBarIconColor"
                    />
                  </span>
                  <span className="text-primary-sideBarIconColor">
                    {item.title}
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
