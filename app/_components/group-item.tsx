import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";

export default function GroupItem() {
  return (
    <Link
      href="#"
      className="px-6 py-4 mx-3 lg:mx-0 rounded-lg lg:rounded-none hover:bg-zinc-50 flex items-center justify-between transition ease-in-out  bg-white "
    >
      <div className="flex items-center gap-4  text-zinc-600">
        <FaUsers className="text-3xl text-primary-200" />
        <div>
          <h3 className="font-medium">Group Name</h3>
          <p className="text-sm text-zinc-400">last message...</p>
        </div>
      </div>
      <div className="size-6  text-xs bg-primary-100 font-medium text-white flex items-center justify-center rounded-full ">
        12
      </div>
    </Link>
  );
}
