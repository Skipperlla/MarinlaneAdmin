import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";
import { IPagination } from "types/user";
interface IMobilPagination {
  avatar?: string;
  createdAt: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  title?: string;
  totalSpending?: number;
  bookings?: [{ createdAt: string; _id: string }];
  discount?: number;
  hasDiscount?: boolean;
  isBlocked?: boolean;
  lastSeen?: number | string;
  newUser?: boolean;
  notification?: boolean;
  role?: string;
  totalBooking?: number;
}
const MobilPagination: React.FC<{
  data: { data: IMobilPagination[]; count: number; pagination: IPagination };
}> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="block lg:hidden">
      {Object?.getOwnPropertyNames(data?.pagination)?.length > 0 && (
        <div className="flex items-center justify-end">
          {Number(data?.pagination?.next?.page) !== 2 && (
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
          {data?.pagination?.next?.page && (
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
    </div>
  );
};

export default MobilPagination;
