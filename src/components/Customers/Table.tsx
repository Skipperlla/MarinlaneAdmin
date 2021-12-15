import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { IUser } from "types/user";
import { useRouter } from "next/router";

const Table: React.FC<{ data: IUser[] }> = ({ data }) => {
  const router = useRouter();
  const Titles = [
    <input
      type="checkbox"
      onClick={() => {
        data.forEach((items) => {
          if (selected.includes(items._id)) {
            setSelected([]);
          } else {
            setSelected((prev) => [...prev, items._id]);
          }
        });
      }}
    />,
    "Customer",
    "Last Seen",
    "Bookings",
    "Total Spent",
    "Last Booking Creating",
    "New User",
    "Title",
    "Blocked",
    "News.",
  ];
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <table className="table-auto w-full h-auto">
      <thead>
        <tr className="border-b">
          {Titles.map((title, index) => {
            return (
              <th className="py-2 px-4" key={index}>
                {title}
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
                <input
                  type="checkbox"
                  checked={selected.includes(items._id)}
                  onClick={() => {
                    if (selected.includes(items._id)) {
                      setSelected(
                        selected.filter((item) => item !== items._id)
                      );
                    } else {
                      setSelected([...selected, items._id]);
                    }
                  }}
                />
              </td>
              <td className="text-center py-2 px-4">{items.fullName}</td>
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
                    {moment(items.bookings[0]?.createdAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
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
