import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { IUser } from "types/user";
import { useRouter } from "next/router";
import { colorFilter } from "@lib/listItems";
import Pagination from "@components/Customers/Pagination";

const Table: React.FC<{ data: IUser[] }> = ({ data, count, pagination }) => {
  const router = useRouter();
  const Titles = [
    { label: "Date", color: "text-indigo-500" },
    { label: "Time", color: "text-indigo-500" },
    { label: "Status", color: "text-indigo-500" },
    { label: "Minute", color: "text-indigo-500" },
    { label: "Mi", color: "text-indigo-500" },
    { label: "Total Price", color: "text-green-500" },
    { label: "Created At", color: "text-indigo-500" },
  ];

  return (
    <>
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
                onClick={() => router.push(`${router.pathname}/${items.uuid}`)}
              >
                <td className="text-center py-2 px-4">{items.Date}</td>
                <td className="text-center py-2 px-4">{items.Time}</td>
                <td
                  className={`text-center py-2 px-4 ${
                    colorFilter(items.status)[0]?.color
                  }`}
                >
                  {items.status.charAt(0).toUpperCase() + items.status.slice(1)}
                </td>
                {items.matrixMinute >= 60 ? (
                  <td className="text-center py-2 px-4">
                    {Math.floor(items.matrixMinute / 60)} Hour
                  </td>
                ) : (
                  <td className="text-center py-2 px-4">
                    {items.matrixMinute} Minute
                  </td>
                )}

                <td className="text-center py-2 px-4">{items.mi} Mi</td>

                <td
                  className={`text-center py-2 px-4 ${
                    items.totalPrice >= 1000 && "text-red-500"
                  }`}
                >
                  <CurrencyFormat
                    value={items.totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </td>
                <td className="text-center py-2 px-4">
                  {moment(items.createdAt).startOf("hour").fromNow()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {count <= 0 ? (
        <div>No Result Found</div>
      ) : (
        <Pagination count={count} router={router} pagination={pagination} />
      )}
    </>
  );
};

export default Table;
