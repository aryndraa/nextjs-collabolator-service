import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";

export default function GroupItem() {
  return (
    <Link
      href="#"
      className="px-6 py-4 hover:bg-zinc-50 flex items-center justify-between transition ease-in-out "
    >
      <div className="flex items-center gap-4  text-zinc-400">
        <FaUsers className="text-2xl" />
        <span className="font-">Group Name</span>
      </div>
      <div className="size-6  text-xs bg-primary-100 font-medium text-white flex items-center justify-center rounded-full ">
        12
      </div>
    </Link>
  );
}
