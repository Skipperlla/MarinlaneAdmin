import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { useRouter } from "next/router";
import { colorFilter } from "utils/lib/listItems";
import Pagination from "@components/Pagination/Pagination";
import { IBooking } from "types/booking";
import { IPagination } from "types/user";

export interface ITable {
  data: IBooking[];
  count: number;
  pagination: IPagination;
}
const Table: React.FC<ITable> = ({ data, count, pagination }) => {
  const router = useRouter();
  const Titles = [
    { title: "Date" },
    { title: "Time" },
    { title: "Status" },
    { title: "Minute" },
    { title: "Mi" },
    { title: "Total Price" },
    { title: "Created At" },
  ];

  return (
    <>
      <table className="table-auto w-full h-auto">
        <thead>
          <tr className="border-b">
            {Titles.map((item, index) => {
              return (
                <th className="py-2 px-4" key={index}>
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
                  {moment(items.createdAt).startOf("minute").fromNow()}
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
