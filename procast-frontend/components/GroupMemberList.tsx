import React from "react";
import FriendItem from "./FriendItem";

export default function GroupMemberList() {
  return (
    <div className="flex flex-col gap-3 p-4 border rounded-lg h-[320px] scroll-y overflow-y-scroll">
      <FriendItem type={["kick"]} />
    </div>
  );
}
