import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Segment from "./Segment";
import {
  hasBooking,
  hasNewsletter,
  hasOrdered,
  lastSeen,
} from "@lib/listItems";
import { debounce } from "lodash";
import { NextRouter } from "next/router";
interface IFilter {
  isFilter: boolean;
  router: NextRouter;
}
const Filter: React.FC<IFilter> = ({ isFilter, router }) => {
  useEffect(() => {
    if (!isFilter && Object.getOwnPropertyNames(router.query).length >= 1)
      router.push("/customers");
  }, [isFilter]);
  const debounceTest = debounce((e) => {
    if (e?.target?.value?.length > 0) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, q: e.target.value },
      });
    } else {
      const querys = { ...router.query };
      delete querys["q"];
      router.push({
        pathname: router.pathname,
        query: querys,
      });
    }
  }, 1000);
  return (
    <div className="border bg-white xl:w-56 rounded-md px-4 pt-4 pb-6 hidden xl:block">
      <div className="flex flex-col">
        <div className="h-12 bg-gray-200 rounded-t-xl flex mb-6">
          <input
            type="text"
            className="h-full py-3 pl-2 w-10/12 bg-transparent rounded-t-xl focus:outline-none"
            placeholder="Search"
            onChange={debounceTest}
          />

          <div className="flex-1 flex items-center justify-center h-full w-full">
            <button className="text-gray-600 h-full flex items-center justify-center">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
        <Segment title={"LAST VISITED"} elements={lastSeen} icon={"clock"} />
        <Segment
          title={"HAS SPENDING"}
          elements={hasOrdered}
          icon={"dollar-sign"}
        />
        <Segment
          title={"HAS NEWSLETTER"}
          elements={hasNewsletter}
          icon={"envelope"}
        />
        <Segment
          title={"HAS BOOKING"}
          elements={hasBooking}
          icon={"bookmark"}
        />
      </div>
    </div>
  );
};

export default Filter;
