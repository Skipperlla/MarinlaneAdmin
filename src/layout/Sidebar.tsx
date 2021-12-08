import React from "react";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Link from "next/link";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Bookings, Customers } from "@lib/listItems";
interface ISidebar {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCollapsed: boolean;
}
const Sidebar: React.FC<ISidebar> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isCollapsed,
}) => {
  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <ProSidebar
      collapsed={isCollapsed}
      toggled={isSidebarOpen}
      breakPoint="xl"
      onToggle={closeSidebar}
      className="h-full"
    >
      <SidebarContent>
        <Menu style={{ padding: "0 !important" }}>
          <MenuItem
            icon={
              <FontAwesomeIcon
                icon="th-large"
                className="text-xl text-primary-sideBarIconColor"
              />
            }
            onClick={closeSidebar}
          >
            <Link href="/">
              <a className="text-xl text-primary-sideBarIconColor">Dashboard</a>
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          style={{ padding: "0 !important" }}
          className="text-primary-sideBarIconColor"
        >
          <SubMenu
            icon={<FontAwesomeIcon icon="list-alt" className="text-xl" />}
            prefix={<span className="text-xl">Bookings</span>}
            className="text-xl"
          >
            {Bookings.map((items, index) => {
              return (
                <MenuItem
                  key={index}
                  icon={
                    <FontAwesomeIcon
                      icon={items.icon as IconProp}
                      className="text-xl"
                    />
                  }
                  onClick={closeSidebar}
                  className="text-primary-sideBarIconColor"
                >
                  <Link href={items.target}>
                    <a className="text-xl">{items.title}</a>
                  </Link>
                </MenuItem>
              );
            })}
          </SubMenu>
        </Menu>
        <Menu style={{ padding: "0 !important" }}>
          <SubMenu
            icon={<FontAwesomeIcon icon="users" className="text-xl" />}
            prefix={<span className="text-xl">Customers</span>}
            className="text-xl "
          >
            {Customers.map((items, index) => {
              return (
                <MenuItem
                  key={index}
                  icon={
                    <FontAwesomeIcon
                      icon={items.icon as IconProp}
                      className="text-xl"
                    />
                  }
                  onClick={closeSidebar}
                  className="text-primary-sideBarIconColor"
                >
                  <Link href={items.target}>
                    <a className="text-xl">{items.title}</a>
                  </Link>
                </MenuItem>
              );
            })}
          </SubMenu>
        </Menu>
        <Menu style={{ padding: "0 !important" }}>
          <MenuItem
            icon={
              <FontAwesomeIcon
                icon="comments"
                className="text-xl text-primary-sideBarIconColor"
              />
            }
            onClick={closeSidebar}
          >
            <span className="text-xl text-primary-sideBarIconColor">
              Reviews
            </span>
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Sidebar;
