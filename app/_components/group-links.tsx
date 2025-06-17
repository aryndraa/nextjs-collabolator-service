import React from "react";
import Logo from "./logo";
import { GoPlus } from "react-icons/go";
import GroupItem from "./group-item";

export default function GroupLinks() {
  return (
    <div className="w-68 border-r h-screen">
      <div className="w-full flex justify-start p-6 border-b ">
        <Logo />
      </div>
      <div className="mb-6">
        <div className="flex justify-between pb-4 mb-4 border-b py-4 px-6">
          <h2>All Group</h2>
          <button className="text-2xl cursor-pointer">
            <GoPlus />
          </button>
        </div>
      </div>
      <div className="flex flex-col ">
        <GroupItem />
        <GroupItem />
        <GroupItem />
      </div>
    </div>
  );
}
