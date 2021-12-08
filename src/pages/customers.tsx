import MobilTable from "@components/Customers/MobilTable";
import Table from "@components/Customers/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "@layout/Main";

import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { getUser } from "store/actions/userAction";
import { CSVLink, CSVDownload } from "react-csv";
import MobilFilter from "@components/Customers/MobilFilter";
import Filter from "@components/Customers/Filter";
import Pagination from "@components/Customers/Pagination";
import Spinner from "@components/Spinner";

const Customers = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { Users, loading } = useSelector((state: AppState) => state.user);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  useEffect(() => {
    if (router.isReady) dispatch(getUser(router.query));
  }, [router.isReady, router.query]);
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];
  return (
    <Main>
      <div className="mb-4 w-full xl:flex justify-end items-center text-indigo-600 font-semibold hidden">
        <div className="cursor-pointer flex items-center justify-center hover:bg-indigo-300 py-1 px-3 rounded-xl transition-all">
          <button className="mr-2 ">
            <FontAwesomeIcon icon="download" className="text-xl" />
          </button>
          <h1>EXPORT</h1>
          <CSVLink data={data} headers={headers}>
            Download me
          </CSVLink>
          ;
        </div>
      </div>
      <div className="xl:flex hidden">
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
      <div className="border p-4 xl:hidden block">
        {Users?.data?.map((users, index: number) => {
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
