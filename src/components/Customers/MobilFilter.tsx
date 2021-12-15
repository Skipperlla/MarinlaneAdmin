import ReactSelect from "@components/ReactSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lastSeen, hasBooking, hasNewsletter } from "@lib/listItems";
import React from "react";
import { IMobilNav } from "types/customers";

const MobilNav:React.FC<IMobilNav> = ({ setIsFilter, isFilter, router }) => {
  
  return (
    <div className="p-4 lg:hidden block">
      <div className="flex justify-between items-center">
        <div className="bg-gray-200 h-10 rounded-t-xl relative flex">
          <input
            type="text"
            className="bg-transparent h-full w-10/12	py-3 pl-2"
          />
          <button className="flex-1 flex items-center justify-center h-full w-full">
            <FontAwesomeIcon icon="search" className="text-gray-600 " />
          </button>
        </div>
        <div className="h-full flex items-center justify-center">
          <button className="h-full" onClick={() => setIsFilter(!isFilter)}>
            <FontAwesomeIcon
              icon="filter"
              className="text-xl text-indigo-600 mr-4"
            />
          </button>
          <button className="h-full">
            <FontAwesomeIcon
              icon="download"
              className="text-xl text-indigo-600"
            />
          </button>
        </div>
      </div>
      {isFilter && (
        <>
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4 grid-rows-2">
              <ReactSelect
                options={lastSeen.values}
                placeholder="Last Seen"
                name={"lastSeen"}
              />
              <ReactSelect
                options={hasBooking.values}
                placeholder="Has Ordered"
                name={"hasOrdered"}
              />
              <ReactSelect
                options={hasBooking.values}
                placeholder="Has Booking"
                name={"hasBooking"}
              />
              <ReactSelect
                options={hasNewsletter.values}
                placeholder="Has Newsletter"
                name={"hasNewsletter"}
              />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-xl text-center font-semibold">
              Active Filters
            </h1>
            <div className="mt-2 flex items-center justify-between">
              {Object.getOwnPropertyNames(router.query)?.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default MobilNav;
