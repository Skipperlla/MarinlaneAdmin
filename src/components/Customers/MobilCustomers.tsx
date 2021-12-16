import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";
import { IMobilCustomer } from "types/customers";
import moment from "moment";
import Image from "next/image";

const MobilCustomers: React.FC<IMobilCustomer> = ({
  fullName,
  phoneNumber,
  title,
  createdAt,
  uuid,
  avatar,
}) => {
  return (
    <div className="border rounded-xl mb-6">
      <div className="w-full flex justify-between items-center border-b p-4">
        <div className="flex items-center ">
          <div className="rounded-full w-10 h-10 mr-2">
            <Image
              src={avatar}
              width={40}
              height={40}
              layout="fixed"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-xl h-full">{fullName}</h1>
        </div>
        <Link href={`/customers/${uuid}`}>
          <a className="text-indigo-500">
            <FontAwesomeIcon icon="eye" />
          </a>
        </Link>
      </div>
      <div className="p-4">
        <div className="flex flex-col">
          <div className="w-full flex items-center mb-2">
            <h1>Phone Number:</h1>
            <span
              className="text-sm font-semibold"
              onClick={(e) => {
                e.preventDefault();
                {
                  window.open("tel:" + phoneNumber);
                }
              }}
            >
              &nbsp;&nbsp;
              {phoneNumber}
            </span>
          </div>
          <div className="w-full flex items-center mb-2">
            <h1>{"Title && Gender:"}</h1>
            <span className="text-sm font-semibold h-full">
              &nbsp;&nbsp; {title}
            </span>
          </div>
          <div className="w-full flex items-center ">
            <h1>Created At:</h1>
            <span className="text-sm font-semibold h-full">
              &nbsp;&nbsp; {moment(createdAt).startOf("minute").fromNow()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilCustomers;
