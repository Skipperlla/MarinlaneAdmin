import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";
interface IMobilTable {
  fullName: string;
  totalSpent: number;
  totalBooking: number;
  lastSeen: string;
}
const MobileCard: React.FC<IMobilTable> = ({
  fullName,
  totalSpent,
  totalBooking,
  lastSeen,
}) => {
  return (
    <div className="border rounded-xl mb-6">
      <div className="w-full flex justify-between items-center border-b p-4">
        <h1 className="text-xl">{fullName}</h1>
        <Link href={`/customers/${12}`}>
          <a className="text-indigo-500">
            <FontAwesomeIcon icon="eye" />
          </a>
        </Link>
      </div>
      <div className="p-4">
        <div className="flex flex-col">
          <div className="w-full flex items-center mb-2">
            <h1>Total Spent:</h1>
            <span className="text-sm font-semibold">
              &nbsp;&nbsp;
              <CurrencyFormat
                value={totalSpent}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
          <div className="w-full flex items-center mb-2">
            <h1>Total Booking:</h1>
            <span className="text-sm font-semibold h-full">
              &nbsp;&nbsp; {totalBooking}
            </span>
          </div>
          <div className="w-full flex items-center ">
            <h1>Last Seen:</h1>
            <span className="text-sm font-semibold h-full">
              &nbsp;&nbsp; {lastSeen}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
