import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface ICard {
  icon: any;
  title: string;
  count: string;
  bg: string;
}
const Card: React.FC<ICard> = ({ icon, title, count, bg }) => {
  return (
    <div className="bg-white border rounded-xl p-4 ">
      <div className="flex items-center h-full ">
        <div
          className={`w-8 h-8 mr-4 flex items-center justify-center  rounded-full ${bg} text-green-500`}
        >
          <FontAwesomeIcon icon={icon as IconProp} />
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
