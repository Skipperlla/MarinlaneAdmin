import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorFilter } from "@lib/listItems";
import React from "react";

const SingleTable = ({ data, label }) => {
  return (
    <div className="py-6">
      <div className="mb-2 pb-2">
        <h1 className="text-xl">{label}</h1>
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
                  <span className="w-5 mr-1 text-gray-500">
                    <FontAwesomeIcon icon={item.icon as IconProp} />
                  </span>
                  <span
                    className={`text-base ${
                      item.color ? item.color : "text-indigo-500"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                <span>{item.value}</span>
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
};

export default SingleTable;
