import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1440px] h-[72px] bg-white flex justify-between p-5 m-auto mt-8">
      <div className="flex gap-6 ml-28">
        <img src="./images/Logo.png" alt="" />
        <p>Dashboard</p>
        <p>Records</p>
      </div>
      <div className="flex gap-6 mr-28">
        <button>Records</button>
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt=""
          className="w-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
