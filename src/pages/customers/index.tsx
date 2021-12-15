import MobilTable from "@components/Customers/MobilTable";
import Table from "@components/Customers/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "@layout/Main";

import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { getUser } from "store/actions/userAction";
import MobilFilter from "@components/Customers/MobilFilter";
import Filter from "@components/Customers/Filter";
import Pagination from "@components/Customers/Pagination";
import Spinner from "@components/Spinner";
import api from "@lib/api";
import fileDownload from "js-file-download";
const Customers = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { Users, loading } = useSelector((state: AppState) => state.user);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (router.isReady) dispatch(getUser(router.query));
  }, [router.isReady, router.query]);

  return (
    <Main>
      <div className="mb-4 w-full lg:flex justify-end items-center text-indigo-600 font-semibold hidden">
        <div
          onClick={(e) => {
            e.preventDefault();
            setIsLoading(true);
            api()
              .get("/Admin/User/exportExcelUser", { responseType: "blob" })
              .then((data) => {
                fileDownload(data.data, "customers.xlsx");
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
      </div>
      <div className="lg:flex hidden">
        <Filter router={router} isFilter={isFilter} />
        <div className=" border bg-white flex-1 ml-2 rounded-md">
          {loading ? (
            <div className="flex justify-center items-center my-6">
              <Spinner type="TailSpin" w={80} h={80} />
            </div>
          ) : (
            <Table data={Users?.data} />
          )}

          <Pagination
            count={Users?.count}
            router={router}
            pagination={Users?.pagination}
          />
        </div>
      </div>
      <MobilFilter
        router={router}
        setIsFilter={setIsFilter}
        isFilter={isFilter}
      />
      <div className="border p-4 lg:hidden block">
        {Users?.data?.map((users, index: number) => {
          return (
            <MobilTable
              key={index}
              fullName={users.fullName}
              totalSpent={users.totalSpending}
              totalBooking={users.totalBooking}
              lastSeen={"21.12.2021"}
              uuid={users._id}
            />
          );
        })}
      </div>
    </Main>
  );
};

export default Customers;
