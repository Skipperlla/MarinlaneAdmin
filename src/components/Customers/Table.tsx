import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { useRouter } from "next/router";

import { ICustomers, IPagination } from "types/user";
import Pagination from "../Pagination/Pagination";

const Table: React.FC<{
  data: ICustomers[];
  count: number;
  pagination: IPagination;
}> = ({ data, count, pagination }) => {
  const router = useRouter();
  const Titles = [
    { title: "Customer" },
    { title: "Last Seen" },
    { title: "Bookings" },
    { title: "Total Spent" },
    { title: "Last Booking Creating" },
    { title: "New User" },
    { title: "Title" },
    { title: "Blocked" },
    { title: "News" },
  ];

  return (
    <>
      <table className="table-auto w-full h-auto">
        <thead>
          <tr className="border-b">
            {Titles.map((item, index) => {
              return (
                <th className={`py-2 px-4`} key={index}>
                  {item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((items, index: number) => {
            return (
              <tr
                className="border-b hover:bg-gray-200 transition-all cursor-pointer"
                key={index}
                onClick={() => router.push(`/customers/${items._id}`)}
              >
                <td className="text-center py-2 px-4">
                  {items.firstName}&nbsp;{items.lastName}
                </td>
                <td className="text-center py-2 px-4">
                  {moment(items.lastSeen).startOf("seconds").fromNow()}
                </td>
                <td className="text-center py-2 px-4">{items.totalBooking}</td>
                <td
                  className={`text-center py-2 px-4 ${
                    items.totalSpending >= 1000 && "text-red-500"
                  }`}
                >
                  <CurrencyFormat
                    value={items.totalSpending.toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </td>
                <td className="text-center py-2 px-4">
                  {items.bookings[0]?.createdAt ? (
                    <>
                      {moment(items.bookings[0]?.createdAt)
                        .startOf("minute")
                        .fromNow()}
                    </>
                  ) : (
                    <span>Not yet created</span>
                  )}
                </td>
                <td className="text-center py-2 px-4">
                  {items.newUser ? (
                    <FontAwesomeIcon icon="check" className="text-green-500" />
                  ) : (
                    <FontAwesomeIcon icon="times" className="text-red-500" />
                  )}
                </td>
                <td className="text-center py-2 px-4">{items.title}</td>
                <td className="text-center py-2 px-4">
                  {items.isBlocked ? (
                    <FontAwesomeIcon icon="check" className="text-green-500" />
                  ) : (
                    <FontAwesomeIcon icon="times" className="text-red-500" />
                  )}
                </td>
                <td className="text-center py-2 px-4">
                  {items.notification ? (
                    <FontAwesomeIcon icon="check" className="text-green-500" />
                  ) : (
                    <FontAwesomeIcon icon="times" className="text-red-500" />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {count <= 0 ? (
        <div className="text-center my-6 text-xl">No Result Found</div>
      ) : (
        <Pagination count={count} router={router} pagination={pagination} />
      )}
    </>
  );
};

export default Table;
