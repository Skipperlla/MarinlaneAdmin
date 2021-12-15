import MobilTable from "@components/Customers/MobilTable";
import Table from "@components/Booking/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "@layout/Main";

import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import MobilFilter from "@components/Customers/MobilFilter";
import Spinner from "@components/Spinner";
import api from "@lib/api";
import fileDownload from "js-file-download";
import { Upcomings } from "store/actions/bookingAction";
const Customers = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { Bookings, loading } = useSelector((state: AppState) => state.booking);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (router.isReady) dispatch(Upcomings(router.query));
  }, [router.isReady, router.query]);

  return (
    <Main>
      <div className="mb-4 w-full xl:flex justify-between items-center text-indigo-600 font-semibold hidden">
        <div className="text-green-500 text-xl font-semibold py-1 px-3">
          <h1>Upcoming</h1>
        </div>
        {loading ? (
          <Spinner type="TailSpin" w={20} h={20} />
        ) : (
          <div
            onClick={(e) => {
              e.preventDefault();
              setIsLoading(true);
              api()
                .get("/Admin/Booking/exportUpcomingExcel", {
                  responseType: "blob",
                })
                .then((data) => {
                  fileDownload(data.data, "bookings_upcoming.xlsx");
                  setIsLoading(false);
                });
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
      <div className="xl:flex hidden">
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
      <div className="border p-4 xl:hidden block">
        {Bookings?.data?.map((users, index: number) => {
          return (
            <MobilTable
              key={index}
              fullName={users.fullName}
              totalSpent={users.totalSpending}
              totalBooking={users.totalBooking}
              lastSeen={"21.12.2021"}
            />
          );
        })}
      </div>
    </Main>
  );
};

export default Customers;
