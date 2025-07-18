import React, { useState } from "react";
import GroupItem from "./GroupItem";
import { GoPlus } from "react-icons/go";
import Logo from "../logo";
import ListGroups from "./ListGroups";
import GroupCreateModal from "./GroupCreateModal";

export default function MobileGroupNavigation() {
  const [openCreate, setOpenCreate] = useState<boolean>(false);

  return (
    <div className=" w-full border-r h-screen lg:hidden bg-white">
      <div className="w-full flex justify-start px-5 py -6 bg-white mb-4 ">
        <Logo />
      </div>
      <div className="flex justify-between  mb-4  px-5">
        <h2 className="font-medium text-lg">All Group</h2>
        <button
          className="text-2xl cursor-pointer"
          onClick={() => setOpenCreate(true)}
        >
          <GoPlus />
        </button>
      </div>

      <div className="flex flex-col gap-2 ">
        <ListGroups />
      </div>
      {openCreate && (
        <GroupCreateModal setIsOpen={() => setOpenCreate(false)} />
      )}
    </div>
  );
}
