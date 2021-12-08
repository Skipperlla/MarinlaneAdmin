import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
interface ITableElements {
  NameandSurname: string;
  From: string;
  To: string;
  Date: string;
  Time: string;
  ServiceClass: string;
  avatar: string;
  target: string;
}
interface ITableWithAvatar {
  titles: string[];
  contents: ITableElements[];
}
const TableWithAvatar: React.FC<ITableWithAvatar> = ({ titles, contents }) => {
  return (
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs border mt-4">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700  dark:text-gray-400 dark:bg-gray-800 bg-white">
              {titles.map((items, index) => {
                return (
                  <th className="px-4 py-3" key={index}>
                    {items}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {contents.map((items, index) => {
              return (
                <tr
                  key={index}
                  className="text-gray-700 dark:text-gray-400 hover:bg-primary-linkHoverEffect"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      {/* Avatar with inset shadow */}
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <Image
                          className="object-cover w-full h-full rounded-full border"
                          src={items.avatar}
                          alt=""
                          loading="lazy"
                          width={32}
                          height={32}
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{items.NameandSurname}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{items.From}</td>
                  <td className="px-4 py-3 text-sm">{items.To}</td>
                  <td className="px-4 py-3 text-sm">{items.Date}</td>
                  <td className="px-4 py-3 text-sm">{items.Time}&nbsp;AM</td>
                  <td className="px-4 py-3 text-sm">{items.ServiceClass}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-white grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700  sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
        <span className="flex items-center col-span-3">
          Showing 21-30 of 100
        </span>
        <span className="col-span-2" />
        {/* Pagination */}
        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul className="inline-flex items-center">
              <li>
                <button
                  className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Previous"
                >
                  <FontAwesomeIcon
                    icon="angle-left"
                    className="w-4 h-4 fill-current"
                  />
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  1
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  2
                </button>
              </li>
              <li>
                <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                  3
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  4
                </button>
              </li>
              <li>
                <span className="px-3 py-1">...</span>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  8
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  9
                </button>
              </li>
              <li>
                <button
                  className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                  aria-label="Next"
                >
                  <FontAwesomeIcon
                    icon="angle-right"
                    className="w-4 h-4 fill-current"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </span>
      </div>
    </div>
  );
};

export default TableWithAvatar;
