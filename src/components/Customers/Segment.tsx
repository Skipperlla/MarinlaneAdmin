import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ISegment } from "types/customers";

const Segment: React.FC<ISegment> = ({ title, elements, icon }) => {
  const router = useRouter();

  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        <div className="w-5 mr-2 flex items-center justify-center">
          <FontAwesomeIcon
            icon={icon as IconProp}
            className=" text-lg text-gray-400"
          />
        </div>
        <h1 className="text-sm">{title}</h1>
      </div>
      <div className="flex flex-col">
        {elements.values.map((element, index: number) => {
          return (
            <div
              className={`cursor-pointer py-1 pl-8 pr-4 transition-all	flex items-center relative ${
                router.query[elements.title] == element.value
                  ? "bg-gray-300"
                  : "hover:bg-gray-100 "
              }`}
              key={index}
              onClick={() => {
                if (router.query[elements.title] == element.value) {
                  const querys = { ...router.query };
                  delete querys[elements.title];
                  router.push({
                    pathname: router.pathname,
                    query: querys,
                  });
                } else {
                  router.push({
                    pathname: router.pathname,
                    query: {
                      ...router.query,
                      [elements.title]: element.value,
                      perPage: 1,
                    },
                  });
                }
              }}
            >
              <span>{element.label}</span>
              {router.query[elements.title] == element.value && (
                <FontAwesomeIcon
                  icon="times-circle"
                  className="text-primary-icon ml-2 text-lg absolute right-5"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Segment;
