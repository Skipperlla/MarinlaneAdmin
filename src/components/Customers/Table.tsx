import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { useRouter } from "next/router";

import { ICustomers } from "types/user";

const Table: React.FC<{ data: ICustomers[] }> = ({ data }) => {
  const router = useRouter();
  const Titles = [
    { label: "Customer" },
    { label: "Last Seen" },
    { label: "Bookings" },
    { label: "Total Spent", color: "text-green-500" },
    { label: "Last Booking Creating" },
    { label: "New User" },
    { label: "Title" },
    { label: "Blocked" },
    { label: "News" },
  ];

  return (
    <table className="table-auto w-full h-auto">
      <thead>
        <tr className="border-b">
          {Titles.map((item, index) => {
            return (
              <th className={`py-2 px-4 ${item.color}`} key={index}>
                {item.label}
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
              <td className="text-center py-2 px-4">23.11.12</td>
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
                      .startOf("hour")
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
  );
};

export default Table;
