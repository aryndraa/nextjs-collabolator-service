import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

export default function GroupMessage() {
  return (
    <div>
      <div className="bg-white flex items-center justify-between  p-5">
        <div className=" flex items-center gap-2">
          <button className="text-lg">
            <MdArrowBackIos />
          </button>
          <div className="flex items-center gap-4 text-zinc-600 bg-white">
            <span className="p-2 bg-primary-100/10 rounded-full">
              <FaUsers className="text-xl text-primary-200  " />
            </span>
            <div>
              <h3 className="font-medium text-sm">Group Name</h3>
              <p className="text-xs text-zinc-400">2 onlines</p>
            </div>
          </div>
        </div>
        <button className="text-xl">
          <CiMenuKebab />
        </button>
      </div>

      <div className="bg-[#F3F3F3]"></div>
    </div>
  );
}
