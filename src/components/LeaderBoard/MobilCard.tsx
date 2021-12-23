import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import moment from "moment";
import MobilPagination from "@components/Pagination/MobilPagination";
import { IPagination, ITopTen } from "types/user";
export interface IMobilCard {
  avatar: string;
  firstName: string;
  lastName: string;
  totalSpending: number;
  title: string;
  createdAt: string;
  email: string;
  phoneNumber: string;
}

const MobilCard: React.FC<{ data: ITopTen }> = ({ data }) => {
  return (
    <>
      {data?.data?.map((item, index) => {
        return (
          <div key={index} className="border rounded-xl mb-6 block lg:hidden">
            <div className="w-full flex items-center border-b p-4">
              <div className="flex items-center ">
                <div className="rounded-full w-10 h-10 mr-2">
                  <Image
                    src={item.avatar}
                    width={40}
                    height={40}
                    layout="fixed"
                    className="object-cover rounded-full"
                  />
                </div>
                <h1 className="text-xl h-full">
                  {item.firstName}&nbsp;{item.lastName}
                </h1>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-col">
                <div className="w-full flex items-center mb-2">
                  <h1>Total Spending</h1>
                  <span className="text-sm font-semibold">
                    &nbsp;&nbsp;
                    <CurrencyFormat
                      value={item.totalSpending}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </span>
                </div>
                <div className="w-full flex items-center mb-2">
                  <h1>{"Title && Gender:"}</h1>
                  <span className="text-xl text-gray-400 font-semibold h-full">
                    &nbsp;&nbsp;{" "}
                    <FontAwesomeIcon
                      icon={item.title === "Mrs" ? "female" : "male"}
                    />
                  </span>
                </div>
                <div className="w-full flex items-center ">
                  <h1>Created At:</h1>
                  <span className="text-sm font-semibold h-full">
                    &nbsp;&nbsp;{" "}
                    {moment(item.createdAt).startOf("minute").fromNow()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MobilCard;
