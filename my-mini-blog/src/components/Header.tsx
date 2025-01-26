import React from "react";
import NewPostBtn from "./NewPostBtn";

const Header: React.FC = () => {
  return (
    <header className=" border-b-1 border-gray-300 shadow">
      <div className="container flex justify-between mx-auto bg-white px-2 py-4">
        <div className="text-3xl font-bold">Dev Insights</div>
        <NewPostBtn />
      </div>
    </header>
  );
};

export default Header;
