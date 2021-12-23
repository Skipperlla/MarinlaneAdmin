import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import Pagination from "@components/Pagination/Pagination";
import { useRouter } from "next/router";
import { IPagination, ITopTen } from "types/user";
import Spinner from "@components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface ISubCard {
  avatar: string;
  email: string;
  firstName: string;
  lastName: string;
  totalSpending: number;
  phoneNumber: string;
  createdAt: string;
  title: string;
}
const SubCard: React.FC<ITopTen> = ({ data, count, pagination }) => {
  const router = useRouter();
  const Titles = [
    "Full Name",
    "Total Spending",
    "Title",
    "Phone Number",
    "Email",
  ];
  return (
    <div className="hidden lg:block">
      <table className="table-auto w-full h-auto py-2 px-4 border bg-white rounded-xl">
        <thead className="">
          <tr className="border">
            {Titles.map((item, index) => {
              return (
                <th
                  key={index}
                  className={`py-2 px-4 border-r ${index !== 6 && "border-r"}`}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index: number) => {
            return (
              <tr key={index} className="border ">
                <td className="text-center py-2 px-4 border-r flex items-center">
                  <div className="w-8 h-8 rounded-full mr-2">
                    <Image
                      src="https://res.cloudinary.com/insta-clone-app/image/upload/v1639045795/m1zxzoqj5jwfwpggbidx.png"
                      width={32}
                      height={32}
                      layout="fixed"
                      className="object-cover rounded-full "
                    />
                  </div>
                  <span>
                    {item.firstName}&nbsp;{item.lastName}
                  </span>
                </td>
                <td className="text-center py-2 px-4 border-r">
                  <CurrencyFormat
                    value={item.totalSpending}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </td>
                <td className="text-center py-2 px-4 border-r text-2xl text-gray-400">
                  <FontAwesomeIcon
                    icon={item.title === "Mrs" ? "female" : "male"}
                  />
                </td>
                <td className="text-center py-2 px-4 border-r">
                  {item.phoneNumber}
                </td>
                <td className="text-center py-2 px-4 border-r">{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination count={count} router={router} pagination={pagination} />
    </div>
  );
};

export default SubCard;
// <motion.div
//   whileHover={{ translateY: "-8px" }}
//   className="bg-white border rounded-xl p-3 mt-2 flex items-center justify-between"
// >
//   <div className="flex items-center">
//     <div className="w-14 h-14 rounded-full ">
//       <Image
//         src="https://res.cloudinary.com/insta-clone-app/image/upload/v1639045795/m1zxzoqj5jwfwpggbidx.png"
//         width={56}
//         height={56}
//         layout="fixed"
//         className="object-cover rounded-full "
//       />
//     </div>
//     <div className="ml-2">
//       <h2 className="font-semibold">Kiran Acharya</h2>
//     </div>
//   </div>

//   <div className="">
//     <CurrencyFormat
//       value={12312}
//       displayType={"text"}
//       thousandSeparator={true}
//       prefix={"$"}
//     />
//   </div>
//   <div className="">
//     <h1>Mr.</h1>
//   </div>
//   <div className="">
//     <h1>dkaskdksadka@gmail.com</h1>
//   </div>
//   <div className="h-8 hover:bg-green-500 transition-all border border-green-500 text-green-500 flex items-center justify-center py-2 px-4 rounded-xl hover:text-white">
//     <button>Congratulate</button>
//   </div>
// </motion.div>
