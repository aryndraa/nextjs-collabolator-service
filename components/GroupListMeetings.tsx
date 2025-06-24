import React from "react";
import GroupMeetingCard from "./GroupMeetingCard";
import { GoPlus } from "react-icons/go";

export default function GroupListMeetings() {
  return (
    <div>
      <div className="flex flex-col gap-4 overflow-y-scroll max-h-[73dvh] scroll-y">
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
      <div className="py-3 w-full border-t ">
        <button className="flex items-center gap-2 cursor-pointer justify-center p-3 font-medium text-white w-full text-sm bg-primary-100 rounded-lg">
          <span className="text-xl">
            <GoPlus />
          </span>
          New Meeting
        </button>
      </div>
    </div>
  );
}
