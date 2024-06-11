import React from "react";
import WalletSvg from "./svgs/walletSvg";

const Lesson = ({ time }) => {
  return (
    <div className="relative p-4 border rounded-md shadow-md">
      <div className="absolute top-2 right-2 text-red-500">
        <WalletSvg />
      </div>
      <h1 className="text-xl font-bold">{time}</h1>
      <h6 className="text-gray-600">Ментальная арифметика</h6>
    </div>
  );
};

export default Lesson;
