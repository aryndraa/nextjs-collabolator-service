import React from "react";
import Overlay from "./Overlay";
import { IoIosClose } from "react-icons/io";
import FriendItem from "./FriendItem";
import Button from "./Button";
import { Label } from "./ui/label";

export default function GroupAssignmentConfirmModal() {
  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6 ">
        <div className="flex justify-end -mb-4">
          <button className="text-3xl cursor-pointer text-zinc-500">
            <IoIosClose />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-medium text-lg ">Meetings Title</h2>
            <p className=" text-zinc-500 text-sm">December 12, 12:40 PM</p>
          </div>

          <div>
            <h3 className="mb-1">Description</h3>
            <p className="text-sm text-zinc-500">
              Initiate project scope and objectives while coordinating with
              stakeholders to ensure alignment on deliverables and timelines.
              Focus on building a cohesive team that can meet the project&apos;s
              demands effectively.
            </p>
          </div>

          <div>
            <Label className="mb-3 text-zinc-400">Who&apos;s Assigne</Label>
            <div className="flex flex-col gap-4 p-3 border rounded-lg scroll-y overflow-y-scroll">
              <FriendItem />
            </div>
          </div>
          <Button>Mark As Down</Button>
        </div>
      </div>
    </Overlay>
  );
}
