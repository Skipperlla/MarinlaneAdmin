import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
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
interface ITableWithActions {
  titles: string[];
  contents: ITableElements[];
}
const TableWithActions: React.FC<ITableWithActions> = ({
  titles,
  contents,
}) => {
  const router = useRouter();
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-xs  ">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700  dark:text-gray-400 dark:bg-gray-800 ">
              {titles.map((items, index) => {
                return (
                  <th className="px-4 py-3" key={index}>
                    {items}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className=" divide-y dark:divide-gray-700 dark:bg-gray-800">
            {contents.map((items, index) => {
              return (
                <tr
                  className="hover:bg-primary-linkHoverEffect text-gray-700 dark:text-gray-400 cursor-pointer"
                  key={index}
                  onClick={() => {
                    router.push(items.target);
                  }}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
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
                        <p className="font-semibold break-all">
                          {items.NameandSurname}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm ">{items.From}</td>
                  <td className="px-4 py-3 text-sm">{items.To}</td>
                  <td className="px-4 py-3 text-sm">{items.Date}</td>
                  <td className="px-4 py-3 text-sm">{items.Time}&nbsp;AM</td>
                  <td className="px-4 py-3 text-sm">{items.ServiceClass}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        className="flex flex-col lg:flex-row items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-green-500 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        <StartAppointment className="w-5 h-5	 lg:mr-4" />
                        <span>Start Appointment</span>
                      </button>
                    </div>
                  </td>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700  sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
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
function StartAppointment(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M23.948.042c-.413-.028-.817-.042-1.214-.042-8.6 0-13.497 6.557-15.278 11.833l4.727 4.727c5.428-1.944 11.817-6.66 11.817-15.168 0-.44-.017-.89-.052-1.35zm-11.277 14.178l-2.883-2.883c1.221-2.859 4.691-8.945 12.199-9.32-.251 5.775-4.041 9.932-9.316 12.203zm5.471 1.538c-.547.373-1.09.71-1.628 1.011-.187.891-.662 1.842-1.351 2.652-.002-.576-.162-1.156-.443-1.738-.495.225-.966.418-1.414.588.66 1.709-.012 2.971-.915 4.154 1.296-.098 2.656-.732 3.728-1.805 1.155-1.155 1.967-2.823 2.023-4.862zm-11.82-6.469c-.579-.28-1.158-.438-1.732-.441.803-.681 1.744-1.153 2.626-1.345.314-.552.667-1.097 1.039-1.633-2.039.055-3.708.867-4.864 2.023-1.071 1.071-1.706 2.433-1.804 3.728 1.184-.904 2.446-1.576 4.155-.914.173-.471.366-.944.58-1.418zm7.738.663c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0c.391.392.391 1.024 0 1.415s-1.024.39-1.414-.001zm4.949-4.951c-.78-.78-2.047-.78-2.828 0-.781.781-.781 2.049 0 2.829.781.781 2.048.781 2.829 0 .78-.78.78-2.047-.001-2.829zm-1.908 1.911c-.273-.273-.273-.718 0-.99.271-.273.717-.273.99 0 .272.272.271.717 0 .99-.274.272-.718.272-.99 0zm-6.747 10.65c-1.492 3.81-5.803 6.208-10.354 6.438.219-4.289 2.657-8.676 6.64-10.153l.805.806c-4.331 2.755-4.653 5.346-4.665 6.575 1.268-.015 4.054-.344 6.778-4.464l.796.798z" />
    </svg>
  );
}
export default TableWithActions;
