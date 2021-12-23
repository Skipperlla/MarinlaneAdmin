import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import moment from "moment";
import { colorFilter } from "utils/lib/listItems";
import { useRouter } from "next/router";
import MobilPagination from "@components/Pagination/MobilPagination";
import { IPagination } from "types/user";
import { IBooking } from "types/booking";

const MobilBooking: React.FC<{
  data: { data: IBooking[]; count: number; pagination: IPagination };
}> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      {data?.count > 0 ? (
        <>
          {data?.data?.map((item, index) => {
            return (
              <div className="border rounded-xl mb-6" key={index}>
                <div className="w-full flex justify-between items-center border-b p-4">
                  <div className="flex items-center ">
                    <h1
                      className={`text-xl h-full ${
                        colorFilter(item.status)[0]?.color
                      }`}
                    >
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </h1>
                  </div>
                  <Link href={`${router.pathname}/${item.uuid}`}>
                    <a className="text-indigo-500">
                      <FontAwesomeIcon icon="eye" />
                    </a>
                  </Link>
                </div>
                <div className="p-4">
                  <div className="flex flex-col">
                    <div className="w-full flex items-center mb-2">
                      <h1>Booking Date:</h1>
                      <span className="text-sm font-semibold">
                        &nbsp;&nbsp;
                        {item.Date}
                      </span>
                    </div>
                    <div className="w-full flex items-center mb-2">
                      <h1>Booking Time</h1>
                      <span className="text-sm font-semibold h-full">
                        &nbsp;&nbsp; {item.Time}
                      </span>
                    </div>
                    <div className="w-full flex items-center mb-2">
                      <h1>Created At:</h1>
                      <span className="text-sm font-semibold h-full">
                        &nbsp;&nbsp;
                        {moment(item.createdAt).startOf("second").fromNow()}
                      </span>
                    </div>
                    <div className="w-full flex items-center">
                      <h1>Duration</h1>
                      <span className="text-sm font-semibold h-full">
                        &nbsp;&nbsp; {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <MobilPagination data={data} />
        </>
      ) : (
        <div className="flex-1 items-center justify-center flex text-xl">
          No Result Found
        </div>
      )}
    </>
  );
};

export default MobilBooking;
