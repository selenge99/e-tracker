import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-[1440px] bg-[#eaecee] h-[1000px] m-auto flex justify-between p-8">
      <div className="w-[1200px] flex gap-5 ml-[100px]">
        <div className="w-[385px] h-[220px] bg-[#0166FF] rounded-2xl flex flex-col justify-between p-6">
          <div className="flex gap-2">
            <img
              src="./images/logo2.png"
              alt=""
              color="text-color
              "
            />
            <p className="text-white">Geld</p>
          </div>
          <div className="text-white">
            <p>Cash</p>
            <p>10,000,000</p>
          </div>
        </div>
        <div className="w-[385px] h-[220px]  bg-white rounded-2xl flex flex-col justify-between p-8">
          <p>Your Income</p>
          <p className="border"></p>
          <p>1,200,000</p>
          <h1>Your Income Amount</h1>
          <p>32% from last month</p>
        </div>
        <div className="w-[385px] h-[220px] bg-white rounded-2xl flex flex-col justify-between p-8">
          <p>Your Income</p>
          <p className="border"></p>
          <p>-1,200,000cd ..</p>
          <h1>Your Income Amount</h1>
          <p>32% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
