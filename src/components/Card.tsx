import React from "react";
interface ICard {
  icon: any;
  title: string;
  count: string;
  bg: string;
}
const Card: React.FC<ICard> = ({ icon, title, count, bg }) => {
  return (
    <div className="bg-white border  rounded-xl p-4">
      <div className="flex items-center h-full ">
        <div className={`p-3 mr-4  rounded-full ${bg} text-green-500`}>
          {icon}
        </div>
        <div>
          <h1 className="text-primary-linkColor font-semibold text-sm ">
            {title}
          </h1>
          <span className="font-semibold text-lg">{count}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
