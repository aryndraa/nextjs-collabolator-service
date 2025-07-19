import React from "react";
import GroupMessage from "./GroupMessage";
import GroupBar from "./GroupBar";
import { useGroup } from "@/contexts/GroupContext";

export default function GroupScreen() {
  const { groupId } = useGroup();

  return (
    <div className="bg-[#F3F3F3] w-full lg:m-4 gap-4 flex ">
      <GroupMessage groupId={groupId!} />
      <GroupBar />
    </div>
  );
}
