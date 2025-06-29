import React from "react";
import GroupMessage from "./GroupMessage";
import GroupBar from "./GroupBar";

export default function GroupScreen() {
  return (
    <div className="bg-[#F3F3F3] w-full lg:m-4 hidden gap-4 hid ">
      <GroupMessage />
      <GroupBar />
    </div>
  );
}
