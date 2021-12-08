import React from "react";
import Loader from "react-loader-spinner";

const Spinner: React.FC<{ type: string; w: number; h: number }> = ({
  type,
  w,
  h,
}) => {
  return <Loader type={type} color="#00BFFF" height={h} width={w} />;
};

export default Spinner;
