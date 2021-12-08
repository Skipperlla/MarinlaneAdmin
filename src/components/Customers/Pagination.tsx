import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextRouter } from "next/router";
import React from "react";
import Paginate from "react-paginate";
import Select from "react-select";
const Pagination: React.FC<{ count: number; router: NextRouter }> = ({
  count,
  router,
  pagination,
}) => {
  const options = [
    { label: 5, value: 5 },
    { label: 15, value: 15 },
    { label: 25, value: 25 },
  ];
  const newURL = router?.asPath
    ?.replace(router.pathname.concat("?"), "")
    ?.split("&")
    [Object.getOwnPropertyNames(router.query)?.indexOf("perPage")]?.split("=");
  const limit =
    Number(router?.query?.perLimit) ||
    pagination?.next?.limit ||
    pagination?.prev?.limit;
  const page = Number(router?.query?.perPage) || 1;
  return (
    <div className="hidden xl:flex-1 xl:flex xl:items-center justify-end mt-4 px-4">
      <div className="mr-10">
        <p className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium">{page > 1 ? limit + 1 : page}</span> to{" "}
          <span className="font-medium">
            {page > 1 ? limit + limit : limit}
          </span>{" "}
          of <span className="font-medium">{count}</span> results
        </p>
      </div>
      <div className="flex items-center mr-10">
        <span className="mr-2 text-sm">Rows per page:</span>
        <Select
          options={options}
          menuPlacement="auto"
          value={options.find((o) => o.value === limit)}
          isSearchable={false}
          onChange={(e) => {
            if (router.asPath.includes("?")) {
              if (
                Object.getOwnPropertyNames(router.query).includes("perLimit")
              ) {
                const newURL = router.asPath
                  .replace(router.pathname.concat("?"), "")
                  .split("&")
                  [
                    Object.getOwnPropertyNames(router.query).indexOf("perLimit")
                  ].split("=");

                if (Number(router.query.perLimit) == e.value) {
                  if (router.asPath.includes("&")) {
                    router.push(
                      Object.getOwnPropertyNames(router.query).indexOf(
                        "perLimit"
                      ) == 0
                        ? router.asPath.replace(
                            `${newURL[0]}=${newURL[1]}&`,
                            ""
                          )
                        : router.asPath.replace(
                            `&${newURL[0]}=${newURL[1]}`,
                            ""
                          )
                    );
                  } else {
                    router.push("/customers");
                  }
                } else {
                  router.push(
                    router.asPath.replace(
                      `${newURL[0]}=${newURL[1]}`,
                      `perLimit=${e.value}`
                    )
                  );
                }
              } else {
                router.push(router.asPath.concat(`&perLimit=${e.value}`));
              }
            } else {
              router.push(router.pathname.concat(`?perLimit=${e.value}`));
            }
          }}
        />
      </div>
      <Paginate
        forcePage={0}
        pageCount={Math.ceil(count / limit)}
        onPageChange={(e) => {
          if (router.asPath.includes("?")) {
            if (Object.getOwnPropertyNames(router.query).includes("perPage")) {
              const newURL = router.asPath
                .replace(router.pathname.concat("?"), "")
                .split("&")
                [
                  Object.getOwnPropertyNames(router.query).indexOf("perPage")
                ].split("=");

              if (Number(router.query.perPage) == e.selected + 1) {
                if (router.asPath.includes("&")) {
                  router.push(
                    Object.getOwnPropertyNames(router.query).indexOf(
                      "perPage"
                    ) == 0
                      ? router.asPath.replace(`${newURL[0]}=${newURL[1]}&`, "")
                      : router.asPath.replace(`&${newURL[0]}=${newURL[1]}`, "")
                  );
                } else {
                  router.push("/customers");
                }
              } else {
                router.push(
                  router.asPath.replace(
                    `${newURL[0]}=${newURL[1]}`,
                    `perPage=${e.selected + 1}`
                  )
                );
              }
            } else {
              router.push(router.asPath.concat(`&perPage=${e.selected + 1}`));
            }
          } else {
            router.push(router.pathname.concat(`?perPage=${e.selected + 1}`));
          }
        }}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
        activeLinkClassName="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
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
