import React from "react";
import { NewCustomersSVG } from "@lib/Icons";
import Image from "next/image";
import Link from "next/link";
const NewCustomers = () => {
  const customers = [
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 3,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 5,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 2,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 1,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 3,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 3,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 5,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 2,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 1,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 3,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 3,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 5,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 2,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 1,
      comment: "Ömer Esmer",
    },
    {
      target: "/",
      avatar: "/avatar.png",
      starsCount: 3,
      comment: "Ömer Esmer",
    },
  ];

  return (
    <div className="bg-white border  rounded-xl   flex flex-col ">
      <div className="flex items-center justify-between  py-2 px-3 border-b">
        <div className={`mr-4  rounded-full bg-blue-500`}>
          <div className="w-12 h-12 flex items-center justify-center">
            <NewCustomersSVG className="w-6 h-6" />
          </div>
        </div>
        <div>
          <span className="text-primary-linkColor font-semibold text-sm ">
            New Customers
          </span>
          <div className="text-right">
            <span className="font-semibold text-lg">12</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        {customers.slice(0, 13).map((items, index) => {
          return (
            <Link href={items.target} key={index}>
              <a className="hover:bg-primary-linkHoverEffect transition-all py-2 px-4 flex items-center">
                <div
                  className="h-full flex items-center"
                  style={{ minWidth: "56px" }}
                >
                  <div className="flex items-center">
                    <Image
                      src={items.avatar}
                      width={40}
                      height={40}
                      className="rounded-full object-cover border "
                    />
                  </div>
                </div>
                <div
                  className="w-auto overflow-y-auto"
                  style={{ WebkitBoxOrient: "vertical" }}
                >
                  <span>Ömer Esmer</span>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
      <div>&nbsp;</div>

      <div className="relative h-full p-4 flex items-center justify-center ">
        <Link href="/customers">
          <a className="absolute bottom-0 flex font-semibold items-center justify-center w-full  text-center  text-blue-500 hover:bg-blue-100 transition-all">
            See All Customers
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewCustomers;
