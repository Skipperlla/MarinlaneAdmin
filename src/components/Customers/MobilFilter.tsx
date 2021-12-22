import ReactSelect from "@components/ReactSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lastSeen, hasBooking, hasNewsletter } from "utils/lib/listItems";
import React, { useState } from "react";
import { IMobilFilter } from "types/customers";
import api from "utils/lib/api";
import fileDownload from "js-file-download";
import Spinner from "@components/Spinner";
import { debounce } from "lodash";
import { Error } from "utils/lib/messages";
import { useAuth } from "utils/contexts/useAuth";

const MobilFilter: React.FC<IMobilFilter> = ({
  setIsFilter,
  isFilter,
  router,
  count,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  const { setIsShow } = useAuth();

  return (
    <div className="py-4 lg:hidden block">
      <div className="flex justify-between items-center">
        <div className="bg-gray-200 h-10 rounded-t-xl relative flex">
          <input
            type="text"
            placeholder="Search"
            onChange={debounceTest}
            defaultValue={router?.query?.q}
            className="bg-transparent h-full w-full	py-3 pl-2 outline-none rounded-t-xl"
          />
        </div>
        <div className="h-full flex items-center justify-center">
          <button className="h-full" onClick={() => setIsFilter(!isFilter)}>
            <FontAwesomeIcon
              icon="filter"
              className="text-xl text-indigo-600 mr-4"
            />
          </button>
          {isLoading ? (
            <Spinner type="TailSpin" w={20} h={20} />
          ) : (
            <button
              className="h-full"
              onClick={(e) => {
                e.preventDefault();
                setIsLoading(true);
                if (count > 0) {
                  api()
                    .get("/Admin/User/exportExcelUser", {
                      responseType: "blob",
                    })
                    .then((data) => {
                      fileDownload(data.data, "customers.xlsx");
                      setIsLoading(false);
                    });
                } else {
                  Error(
                    "You must have at least 1 piece of data to get the excel output."
                  );
                  setIsShow(true);
                  setIsLoading(false);
                }
              }}
            >
              <FontAwesomeIcon
                icon="download"
                className="text-xl text-indigo-600"
              />
            </button>
          )}
        </div>
      </div>
      {isFilter && (
        <>
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4 grid-rows-2">
              {/* <ReactSelect
                options={lastSeen.values}
                placeHolder="Last Seen"
                name={"lastSeen"}
              /> */}
              <ReactSelect
                options={hasBooking.values}
                placeHolder="Has Ordered"
                name={"hasOrdered"}
                value={router?.query?.hasOrdered}
              />
              <ReactSelect
                options={hasBooking.values}
                placeHolder="Has Booking"
                name={"hasBooking"}
                value={router?.query?.hasBooking}
              />
              <ReactSelect
                options={hasNewsletter.values}
                placeHolder="Has Newsletter"
                name={"hasNewsletter"}
                value={router?.query?.hasNewsletter}
              />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-xl text-center font-semibold">
              Active Filters
            </h1>
            <div className="mt-2 flex items-center justify-between flex-wrap">
              {Object.getOwnPropertyNames(router.query)?.map((item, index) => {
                return (
                  <span key={index} className="mb-2">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobilFilter;
