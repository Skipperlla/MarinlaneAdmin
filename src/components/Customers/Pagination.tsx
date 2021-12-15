import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextRouter } from "next/router";
import React, { useState } from "react";
import Paginate from "react-paginate";
import Select, { SingleValue } from "react-select";
import { IPagination } from "types/user";
interface IOptions {
  label: number;
  value: number;
}
const Pagination: React.FC<{
  count: number;
  router: NextRouter;
  pagination: IPagination;
}> = ({ count, router, pagination }) => {
  const options: IOptions[] = [
    { label: 5, value: 5 },
    { label: 15, value: 15 },
    { label: 25, value: 25 },
  ];
  const defaultValue = [{ label: 5, value: 5 }];
  const limit =
    Number(router?.query?.perLimit) ||
    pagination?.next?.limit ||
    pagination?.prev?.limit;
  const page = Number(router?.query?.perPage) || 1;
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      boxShadow: "none",
      margin: 0,
      backgroundColor: "transparent",
      border: "none",
      appearance: "none",
    }),

    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,

      display: "none",
    }),
  };
  return (
    <div className="hidden lg:flex-1 lg:flex lg:items-center justify-end my-4 px-4">
      <div className="mr-10">
        <p className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium">{page > 1 ? limit + 1 : page}</span> to
          <span className="font-medium">
            {page > 1 ? limit + limit : limit}
          </span>
          of <span className="font-medium">{count}</span> results
        </p>
      </div>
      <div className="flex items-center mr-10">
        <span className="mr-2 text-sm">Rows per page:</span>
        <Select
          options={options}
          menuPlacement="auto"
          value={options.find((o) => o.value === limit) || defaultValue}
          isSearchable={false}
          onChange={(e: any) => {
            router.push({
              pathname: router.pathname,
              query: { ...router.query, perLimit: e.value, perPage: 1 },
            });
          }}
          styles={customStyles}
        />
      </div>
      <Paginate
        forcePage={page - 1}
        pageCount={Math.ceil(count / limit) || 1}
        onPageChange={(e) => {
          router.push({
            pathname: router.pathname,
            query: { ...router.query, perPage: e.selected + 1 },
          });
        }}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        breakLinkClassName="relative inline-flex items-center  px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
        activeLinkClassName="z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
        pageLinkClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        containerClassName="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        nextLinkClassName="flex items-center justify-center"
        previousLinkClassName="flex items-center justify-center"
        nextLabel={<FontAwesomeIcon icon="chevron-right" />}
        previousLabel={<FontAwesomeIcon icon="chevron-left" />}
      />
    </div>
  );
};

export default Pagination;
