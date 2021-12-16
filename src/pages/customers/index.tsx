import MobilCustomers from "@components/Customers/MobilCustomers";
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
import api from "utils/lib/api";
import fileDownload from "js-file-download";
import withAuth from "utils/lib/withAuth";
const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { Users, loading } = useSelector((state: AppState) => state.user);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (router.isReady) dispatch(getUser(router.query));
  }, [router.isReady, router.query]);
  console.log(Users?.pagination);
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

      <div className="lg:hidden block">
        {loading ? (
          <div className="flex justify-center items-center my-6">
            <Spinner type="TailSpin" w={80} h={80} />
          </div>
        ) : (
          <>
            <MobilFilter
              router={router}
              setIsFilter={setIsFilter}
              isFilter={isFilter}
              count={Users?.count}
            />
            {Users?.count > 0 ? (
              <>
                {Users?.data?.map((users, index: number) => {
                  return (
                    <MobilCustomers
                      key={index}
                      fullName={`${users.firstName} ${users.lastName}`}
                      phoneNumber={users.phoneNumber}
                      title={users.title}
                      createdAt={users.createdAt}
                      uuid={users._id}
                      avatar={users.avatar}
                    />
                  );
                })}
                {Object.getOwnPropertyNames(Users?.pagination).length > 0 && (
                  <div className="flex items-center justify-end">
                    {Number(Users?.pagination?.next?.page) !== 2 && (
                      <button
                        className="text-xl mr-4"
                        onClick={() => {
                          router.push({
                            pathname: router.pathname,
                            query: {
                              ...router.query,
                              perPage: router.query.perPage
                                ? Number(router?.query?.perPage) - 1
                                : 1,
                            },
                          });
                        }}
                      >
                        <FontAwesomeIcon icon="chevron-left" />
                      </button>
                    )}
                    {Users?.pagination?.next?.page && (
                      <button
                        className="text-xl"
                        onClick={() => {
                          router.push({
                            pathname: router.pathname,
                            query: {
                              ...router.query,
                              perPage: router.query.perPage
                                ? Number(router?.query?.perPage) + 1
                                : 2,
                            },
                          });
                        }}
                      >
                        <FontAwesomeIcon icon="chevron-right" />
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 items-center justify-center flex text-xl">
                No Result Found
              </div>
            )}
          </>
        )}
      </div>
    </Main>
  );
};

export default withAuth(index);
