import React from "react";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
const LeaderCard = () => {
  return (
    <div
      className=" border rounded-xl flex flex-col"
      style={{ minHeight: "250px" }}
    >
      {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
      <div className={`bg-gray-100 h-24 relative rounded-t-xl `}>
        <div className="w-full text-center my-6 text-2xl ">
          <CurrencyFormat
            value={12312}
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
            src="https://res.cloudinary.com/insta-clone-app/image/upload/v1639045795/m1zxzoqj5jwfwpggbidx.png"
            width={56}
            height={56}
            layout="fixed"
            className="object-cover rounded-full "
          />
        </div>
      </div>
      <div className="flex-1 my-8">
        <div className="w-full text-center text-xl mt-2">Sandeep Sandy</div>
      </div>
      <div className="border-t py-2 px-4 flex justify-between items-center">
        <div>s</div>
        <div className="h-8 hover:bg-green-500 transition-all border border-green-500 text-green-500 flex items-center justify-center py-2 px-4 rounded-xl hover:text-white">
          <button>Congratulate</button>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
