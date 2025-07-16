import React from "react";
import GroupItem from "./GroupItem";
import { GoPlus } from "react-icons/go";
import Logo from "../logo";

export default function MobileGroupNavigation() {
  return (
    <div className="hidden w-full border-r h-screen lg:hidden ">
      <div className="w-full flex justify-start p-5 py-6 bg-white mb-4 ">
        <Logo />
      </div>
      <div className="flex justify-between  mb-4  px-5">
        <h2 className="font-medium text-lg">All Group</h2>
        <button className="text-2xl cursor-pointer">
          <GoPlus />
        </button>
      </div>

      <div className="flex flex-col gap-2"></div>
    </div>
  );
}
