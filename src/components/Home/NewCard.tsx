import React from "react";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import CurrencyFormat from "react-currency-format";
import { CustomersAndLeaderBoard } from "types/system";

interface INewCard {
  title: string;
  icon: IconProp;
  count: number;
  noResult: string;
  seeMoreLink: string;
  seeMore: string;
  data: CustomersAndLeaderBoard[];
}
const NewCard: React.FC<INewCard> = ({
  title,
  icon,
  count,
  data,
  noResult,
  seeMoreLink,
  seeMore,
}) => {
  return (
    <section className="bg-white border rounded-xl w-full flex flex-col">
      <div className="py-2 px-4 border-b flex items-center justify-between">
        <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
          <FontAwesomeIcon
            icon={icon as IconProp}
            className="text-white text-sm"
          />
        </div>
        <div className="text-right">
          <h1 className="">{title}</h1>
          <span className="text-sm font-semibold text-red-400">{count}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1">
        {data?.length > 0 ? (
          <>
            {data?.map((item, index) => {
              return (
                <div key={index}>
                  <Link href={`/customers/${item._id}`}>
                    <a className="py-2 px-4 flex items-center hover:bg-gray-100 transition-all flex-1">
                      <div className="rounded-full w-10 h-10 ">
                        <Image
                          src={item.avatar}
                          width={40}
                          height={40}
                          layout="fixed"
                          className="object-cover rounded-full"
                        />
                      </div>
                      {item.totalSpending ? (
                        <div className="flex flex-col justify-center">
                          <span className="ml-3">
                            {item.firstName}&nbsp;{item.lastName}
                          </span>
                          <span className="ml-3 text-sm text-red-400 font-semibold">
                            <CurrencyFormat
                              value={item.totalSpending}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </span>
                        </div>
                      ) : (
                        <span className="ml-3">
                          {item.firstName}&nbsp;{item.lastName}
                        </span>
                      )}
                    </a>
                  </Link>
                </div>
              );
            })}
            <Link href={seeMoreLink}>
              <a className="py-2 px-4 transition-all hover:bg-blue-100 text-center text-blue-500 rounded-b-xl">
                {seeMore}
              </a>
            </Link>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center py-2 px-4 text-red-400 font-semibold">
            {noResult}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewCard;
// <>
//   {data?.length > 0 ? (
//     <>
//       {data?.map((items, index) => {
//         return (
//           <div key={index}>
//             <Link href={`/customers/${items._id}`}>
//               <a className="py-2 px-4 flex items-center hover:bg-gray-100 transition-all flex-1">
//                 <div className="rounded-full w-10 h-10 ">
//                   <Image
//                     src={items.avatar}
//                     width={40}
//                     height={40}
//                     layout="fixed"
//                     className="object-cover rounded-full"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <span className="ml-3">
//                     {items.firstName}&nbsp;{items.lastName}
//                   </span>
//                   <span className="ml-3 text-sm text-red-400 font-semibold">
//                     <CurrencyFormat
//                       value={items.totalSpending}
//                       displayType={"text"}
//                       thousandSeparator={true}
//                       prefix={"$"}
//                     />
//                   </span>
//                 </div>
//               </a>
//             </Link>
//           </div>
//         );
//       })}
//       <Link href="/leaderboard">
//         <a className="py-2 px-4 transition-all hover:bg-blue-100 text-center text-blue-500 rounded-b-xl">
//           See All Leader Board Customers
//         </a>
//       </Link>
//     </>
//   ) : (
//     <div className="flex items-center justify-center h-full">No Result Found</div>
//   )}
// </>
