import React from "react";
import GroupAssignmetCard from "./GroupAssignmentCard";

export default function GroupListAssignment() {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll max-h-[80dvh] scroll-y">
      <GroupAssignmetCard />
      <GroupAssignmetCard />
      <GroupAssignmetCard />
      <GroupAssignmetCard />
    </div>
  );
}
