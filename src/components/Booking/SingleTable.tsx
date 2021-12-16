import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { ReactNode } from "react";
interface ISingleBookingTable {
  color?: string;
  icon: string;
  title: string;
  value: string | number | undefined | ReactNode;
}
const SingleTable: React.FC<{ data: ISingleBookingTable[]; title: string }> = ({
  data,
  title,
}) => {
  return (
    <div className="py-6">
      <div className="mb-2 pb-2">
        <h1 className="text-2xl ">{title}</h1>
      </div>
      {data.map((item, index) => {
        return (
          <section key={index}>
            {item.value ? (
              <div
                className={`flex justify-between border-b mb-4 items-center`}
                key={index}
              >
                <div className="flex items-center justify-center">
                  <span className="w-5 mr-1 text-gray-400">
                    <FontAwesomeIcon
                      icon={item.icon as IconProp}
                      className={`${item.color}`}
                    />
                  </span>
                  <span
                    className={`text-base ${
                      item.color ? item.color : "text-black"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <span className="break-all">{item.value}</span>
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
};

export default SingleTable;
