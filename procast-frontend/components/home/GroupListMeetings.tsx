"use client";

import React, { useState } from "react";
import GroupMeetingCard from "../meeting/GroupMeetingCard";
import { GoPlus } from "react-icons/go";
import Button from "../Button";
import GroupMeetingModal from "../meeting/GroupMeetingModal";

export default function GroupListMeetings() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex flex-col gap-4 overflow-y-scroll max-h-[73dvh] scroll-y pb-24">
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
        <Button onClick={() => setIsOpen(true)}>
          <span className="text-xl">
            <GoPlus />
          </span>
          New Meeting
        </Button>
      </div>

      {isOpen && <GroupMeetingModal setIsOpen={() => setIsOpen(false)} />}
    </div>
  );
}
