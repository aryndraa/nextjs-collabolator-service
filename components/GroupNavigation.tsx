import React from "react";
import Logo from "./logo";
import { GoPlus } from "react-icons/go";
import GroupItem from "./GroupItem";

export default function GroupNavigation() {
  return (
    <div className="lg:w-68 border-r h-screen bg-white">
      <div className="w-full flex justify-start p-6 border-b ">
        <Logo />
      </div>
      <div className="flex justify-between pb-4 mb-4 border-b py-4 px-6">
        <h2>All Group</h2>
        <button className="text-2xl cursor-pointer">
          <GoPlus />
        </button>
      </div>
      <div className="flex flex-col ">
        <GroupItem />
        <GroupItem />
        <GroupItem />
      </div>
    </div>
  );
}
