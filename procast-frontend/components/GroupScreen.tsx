import React from "react";
import GroupMessage from "./GroupMessage";
import GroupBar from "./GroupBar";

export default function GroupScreen() {
  return (
    <div className="bg-[#F3F3F3] w-full lg:m-4 gap-4 flex ">
      <GroupMessage />
      <GroupBar />
    </div>
  );
}
