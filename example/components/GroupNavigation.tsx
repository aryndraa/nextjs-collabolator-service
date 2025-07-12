"use client";

import React, { useState } from "react";
import Logo from "./logo";
import { GoPlus } from "react-icons/go";
import GroupCreateModal from "./GroupCreateModal";
import ListGroups from "./ListGroups";

export default function GroupNavigation() {
  const [openCreate, setOpenCreate] = useState<boolean>(false);

  return (
    <div className="lg:w-68 border-r h-screen bg-white">
      <div className="w-full flex justify-start p-6 border-b ">
        <Logo />
      </div>
      <div className="flex justify-between pb-4 mb-4 border-b py-4 px-6">
        <h2>All Group</h2>
        <button
          className="text-2xl cursor-pointer"
          onClick={() => setOpenCreate(true)}
        >
          <GoPlus />
        </button>
      </div>
      <ListGroups />

      {openCreate && (
        <GroupCreateModal setIsOpen={() => setOpenCreate(false)} />
      )}
    </div>
  );
}
