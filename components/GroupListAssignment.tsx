import React from "react";
import GroupAssignmetCard from "./GroupAssignmentCard";
import { GoPlus } from "react-icons/go";
import Button from "./Button";

export default function GroupListAssignment() {
  return (
    <div>
      <div className="flex flex-col gap-4 overflow-y-scroll max-h-[73dvh] scroll-y pb-24">
        <GroupAssignmetCard />
        <GroupAssignmetCard />
        <GroupAssignmetCard />
        <GroupAssignmetCard />
      </div>

      <div className="py-3 w-full border-t ">
        <Button>
          <span className="text-xl">
            <GoPlus />
          </span>
          New Meeting
        </Button>
      </div>
    </div>
  );
}
