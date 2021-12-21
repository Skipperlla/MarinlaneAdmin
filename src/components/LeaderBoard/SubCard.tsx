import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
const SubCard = () => {
  const Titles = [
    "Full Name",
    "Total Spending",
    "Title",
    "Phone Number",
    "Email",
    "Congratulate",
  ];
  return (
    <table className="table-auto w-full h-auto">
      <thead>
        <tr>
          {Titles.map((item, index) => {
            return <th>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border rounded-xl p-3 mt-2 flex items-center justify-between w-full">
          <td>ömer</td>
        </tr>
      </tbody>
    </table>
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
