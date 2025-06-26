"use client";

import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRegUserCircle, FaInfoCircle } from "react-icons/fa";
import GroupInfoModal from "./GroupInfoModal";
import GroupMemberModal from "./GroupMemberModal";

export default function GroupMessageHeader() {
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white lg:bg-transparent">
      <div className="flex items-center gap-2">
        <button className="text-xl text-zinc-400">
          <MdArrowBackIos />
        </button>
        <div className="flex items-center gap-4 text-zinc-600 bg-white">
          <span className="p-2 bg-primary-100/10 rounded-full">
            <FaUsers className="text-xl text-primary-200" />
          </span>
          <div>
            <h3 className="font-medium text-base lg:text-base">Group Name</h3>
            <p className="text-xs lg:text-sm text-zinc-400">2 online</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-6 ">
        <button className="text-xl flex items-center gap-2 text-zinc-500">
          <FaRegUserCircle />
          <span className="text-sm font-medium hidden lg:block">Member</span>
        </button>
        <button
          onClick={() => setOpenInfo(true)}
          className="text-xl  flex items-center gap-2 text-zinc-500 cursor-pointer"
        >
          <FaInfoCircle />
          <span className="text-sm font-medium hidden lg:block">Info</span>
        </button>
      </div>

      {openInfo && <GroupInfoModal setOpenInfo={() => setOpenInfo(false)} />}
      <GroupMemberModal />
    </div>
  );
}
