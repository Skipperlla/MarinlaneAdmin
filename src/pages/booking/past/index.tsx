import MobilTable from "@components/Customers/MobilCustomers";
import Table from "@components/Booking/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "@layout/Main";

import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import MobilFilter from "@components/Customers/MobilFilter";
import Spinner from "@components/Spinner";
import api from "utils/lib/api";
import fileDownload from "js-file-download";
import { Pasts } from "store/actions/bookingAction";
import withAuth from "utils/lib/withAuth";
import { useAuth } from "utils/contexts/useAuth";
import { Error } from "utils/lib/messages";
const Customers = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { Bookings, loading } = useSelector((state: AppState) => state.booking);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (router.isReady) dispatch(Pasts(router.query));
  }, [router.isReady, router.query]);
  const { setIsShow } = useAuth();

  return (
    <Main>
      <div className="mb-4 w-full lg:flex justify-between items-center text-indigo-600 font-semibold hidden">
        <div className="text-gray-500 text-xl font-semibold py-1 px-3">
          <h1>Past</h1>
        </div>
        {loading ? (
          <Spinner type="TailSpin" w={20} h={20} />
        ) : (
          <div
            onClick={(e) => {
              e.preventDefault();
              setIsLoading(true);
              if (Bookings?.count > 0) {
                api()
                  .get("/Admin/Booking/exportPastExcel", {
                    responseType: "blob",
                  })
                  .then((data) => {
                    fileDownload(data.data, "bookings_past.xlsx");
                    setIsLoading(false);
                  })
                  .catch(() => setIsLoading(false));
              } else {
                Error(
                  "You must have at least 1 piece of data to get the excel output."
                );
                setIsShow(true);
                setIsLoading(false);
              }
            }}
            className="cursor-pointer flex items-center justify-center hover:bg-indigo-300 py-1 px-3 rounded-xl transition-all"
          >
            {isLoading ? (
              <Spinner type="TailSpin" w={20} h={20} />
            ) : (
              <>
                <button className="mr-2">
                  <FontAwesomeIcon icon="download" className="text-xl" />
                </button>
                <h1>EXPORT</h1>
              </>
            )}
          </div>
        )}
      </div>
      <div className="lg:flex hidden">
        <div className=" border bg-white flex-1 ml-2 rounded-md">
          {loading ? (
            <div className="flex justify-center items-center my-6">
              <Spinner type="TailSpin" w={80} h={80} />
            </div>
          ) : (
            <Table
              pagination={Bookings?.pagination}
              data={Bookings?.data}
              count={Bookings?.count}
            />
          )}
        </div>
      </div>
      <MobilFilter
        router={router}
        setIsFilter={setIsFilter}
        isFilter={isFilter}
      />
    </Main>
  );
};

export default withAuth(Customers);
