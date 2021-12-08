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
    if (router.asPath.includes("?")) {
      if (Object.getOwnPropertyNames(router.query).includes("q")) {
        const newURL = router.asPath
          .replace(router.pathname.concat("?"), "")
          .split("&")
          [Object.getOwnPropertyNames(router.query).indexOf("q")].split("=");

        if (e.target.value.length > 0) {
          router.push(
            router.asPath.replace(
              `${newURL[0]}=${newURL[1]}`,
              `q=${e.target.value}`
            )
          );
        } else {
          if (router.asPath.includes("&")) {
            router.push(
              Object.getOwnPropertyNames(router.query).indexOf("q") == 0
                ? router.asPath.replace(`q=${newURL[1]}&`, "")
                : router.asPath.replace(`&q=${newURL[1]}`, "")
            );
          } else {
            router.push("/customers");
          }
        }
      } else {
        router.push(router.asPath.concat(`&q=${e.target.value}`));
      }
    } else {
      router.push(router.pathname.concat(`?q=${e.target.value}`));
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
