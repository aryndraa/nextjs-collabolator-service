import React from "react";
import Overlay from "./Overlay";
import { IoIosClose } from "react-icons/io";
import FriendItem from "./FriendItem";
import { Input } from "./ui/input";

export default function GroupMemberModal() {
  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="flex justify-end -mb-4">
          <button className="text-3xl cursor-pointer text-zinc-500">
            <IoIosClose />
          </button>
        </div>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl font-semibold mb-1">Group Member</h1>
          <p>See who’s in the group</p>
        </div>
        <div className="flex flex-col gap-6">
          <Input
            placeholder={"Search Friend"}
            className="py-6 focus:ring-primary-100/40! focus:border-primary-100!"
          />
          <div className="flex flex-col gap-3 p-3 border rounded-lg h-[320px] scroll-y overflow-y-scroll">
            <FriendItem />
            <FriendItem />
            <FriendItem />
            <FriendItem />
          </div>
        </div>
      </div>
    </Overlay>
  );
}
