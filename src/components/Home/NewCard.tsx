import React from "react";
import avatar from "/public/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import CurrencyFormat from "react-currency-format";

interface INewCard {
  title: string;
  icon: IconProp;
  count: number;
}
const NewCard: React.FC<INewCard> = ({ title, icon, count }) => {
  const items = [
    {
      image: avatar,
      name: "Ömer Esmer",
      target: "/",
    },
  ];
  const leaderBoard = [
    {
      image: avatar,
      name: "Ömer Esmer",
      target: "/",
      totalPrice: 1231123,
    },
  ];
  return (
    <section className="bg-white border rounded-xl w-full flex flex-col">
      <div className="py-2 px-4 border-b flex items-center justify-between">
        <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
          <FontAwesomeIcon
            icon={icon as IconProp}
            className="text-white text-sm"
          />
        </div>
        <div className="text-right">
          <h1 className="">{title}</h1>
          <span className="text-sm font-semibold text-red-400">{count}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1">
        {title == "New Customers" ? (
          <>
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <Link href={item.target}>
                    <a className="py-2 px-4 flex items-center hover:bg-gray-100 transition-all flex-1">
                      <div className="rounded-full w-10 h-10 ">
                        <Image
                          src={item.image}
                          width={40}
                          height={40}
                          layout="fixed"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <span className="ml-3">{item.name}</span>
                    </a>
                  </Link>
                </div>
              );
            })}
            <Link href="/leaderboard">
              <a className="py-2 px-4 transition-all hover:bg-blue-100 text-center text-blue-500 rounded-b-xl">
                See All Customers
              </a>
            </Link>
          </>
        ) : (
          <>
            {leaderBoard.map((items, index) => {
              return (
                <div key={index}>
                  <Link href={items.target}>
                    <a className="py-2 px-4 flex items-center hover:bg-gray-100 transition-all flex-1">
                      <div className="rounded-full w-10 h-10 ">
                        <Image
                          src={items.image}
                          width={40}
                          height={40}
                          layout="fixed"
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="ml-3">{items.name}</span>
                        <span className="ml-3 text-sm text-red-400 font-semibold">
                          <CurrencyFormat
                            value={items.totalPrice}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                          />
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
            <Link href="/leaderboard">
              <a className="py-2 px-4 transition-all hover:bg-blue-100 text-center text-blue-500 rounded-b-xl">
                See All Leader Board Customers
              </a>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default NewCard;
