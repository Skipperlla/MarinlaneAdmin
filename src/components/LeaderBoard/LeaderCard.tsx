import React from "react";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import firstMedal from "../../../public/firstMedal.png";
import secondMedal from "../../../public/secondMedal.png";
import thirdMedal from "../../../public/thirdMedal.png";
import moment from "moment";
const LeaderCard = ({
  avatar,
  fullName,
  createdAt,
  totalSpending,
  title,
  index,
}) => {
  console.log(index);
  return (
    <div
      className=" border rounded-xl flex flex-col relative"
      style={{ minHeight: "250px" }}
    >
      <div className="w-16 h-16  rounded-full absolute z-10 top-2">
        <Image
          src={
            index === 1 ? firstMedal : index === 2 ? secondMedal : thirdMedal
          }
          width={64}
          height={64}
          layout="fixed"
          className="object-cover rounded-full "
        />
      </div>
      {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
      <div className={`bg-gray-100 h-24 relative rounded-t-xl `}>
        <div className="w-full text-center my-6 text-2xl ">
          <CurrencyFormat
            value={totalSpending}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
        <div
          className="w-14 h-14 absolute -bottom-8 right-1/2 rounded-full "
          style={{ transform: "translateX(50%)" }}
        >
          <Image
            src={avatar}
            width={56}
            height={56}
            layout="fixed"
            className="object-cover rounded-full "
          />
        </div>
      </div>
      <div className="flex-1 my-8">
        <div className="w-full text-center text-xl mt-2">{fullName}</div>
      </div>
      <div className="border-t py-2 px-4 flex justify-between items-center">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-sm">
            {moment(createdAt).startOf("hour").fromNow()} Joined
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
