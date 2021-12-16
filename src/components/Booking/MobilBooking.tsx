import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import moment from "moment";
import { colorFilter } from "utils/lib/listItems";
import { useRouter } from "next/router";
interface IMobilBooking {
  Date: string;
  Time: string;
  createdAt: string;
  duration: string;
  status: string;
  uuid: string;
}
const MobilBooking: React.FC<IMobilBooking> = ({
  Date,
  Time,
  createdAt,
  duration,
  status,
  uuid,
}) => {
  const router = useRouter();
  return (
    <div className="border rounded-xl mb-6">
      <div className="w-full flex justify-between items-center border-b p-4">
        <div className="flex items-center ">
          <h1 className={`text-xl h-full ${colorFilter(status)[0]?.color}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </h1>
        </div>
        <Link href={`${router.pathname}/${uuid}`}>
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
              {Date}
            </span>
          </div>
          <div className="w-full flex items-center mb-2">
            <h1>Booking Time</h1>
            <span className="text-sm font-semibold h-full">
              &nbsp;&nbsp; {Time}
            </span>
          </div>
          <div className="w-full flex items-center ">
            <h1>Created At:</h1>
            <span className="text-sm font-semibold h-full">
              &nbsp;&nbsp; {moment(createdAt).startOf("minute").fromNow()}
            </span>
          </div>
          <div className="w-full flex items-center mb-2">
            <h1>Duration</h1>
            <span className="text-sm font-semibold h-full">
              &nbsp;&nbsp; {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilBooking;
