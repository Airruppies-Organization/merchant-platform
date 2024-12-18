import React from "react";

const Card = ({ name, icon, value, sub, type }) => {
  return (
    <div className="h-36 w-56 rounded-3xl bg-[#F2F2F2] p-3 mr-5">
      <div className="flex items-center mb-6">
        <div className="h-8 w-8 rounded-full bg-[#61088E] mr-2"></div>
        <div className="text-[#61088E] text-sm">{name}</div>
      </div>
      <div>
        <div className={`flex ${type === "amount" && "items-baseline"}`}>
          {type === "price" && (
            <p className="text-sm pt-[2px] text-[#61088E]">N</p>
          )}
          <p className="text-2xl">{value}k</p>
          {type === "amount" && (
            <p className="text-sm pt-[2px] text-[#61088E] ml-1">
              transactions so far
            </p>
          )}
        </div>
        <div className="text-[8px] flex">
          <p className="mr-1 text-[#0FBD00]">{sub}</p>
          <p>vs N296.8k yesterday</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
