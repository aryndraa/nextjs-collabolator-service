import React from "react";
import GroupMeetingCard from "./GroupMeetingCard";

export default function GroupListMeetings() {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll max-h-[80dvh] scroll-y">
      <div>
        <h2 className="mb-3 text-sm font-medium text-zinc-400">On Going</h2>
        <div className="flex flex-col gap-4 ">
          <GroupMeetingCard />
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-sm font-medium text-zinc-400">
          Upcoming Meeting
        </h2>
        <div className="flex flex-col gap-4 ">
          <GroupMeetingCard />
          <GroupMeetingCard />
        </div>
      </div>
    </div>
  );
}
