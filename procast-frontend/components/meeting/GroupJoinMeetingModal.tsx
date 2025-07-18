import React from "react";
import Overlay from "../Overlay";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import FriendItem from "../FriendItem";
import { Label } from "../ui/label";
import { IoIosClose } from "react-icons/io";
import Button from "../Button";

type GroupJoinMeetingModalProps = {
  setIsOpen: () => void;
};

export default function GroupJoinMeetingModal({
  setIsOpen,
}: GroupJoinMeetingModalProps) {
  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6 ">
        <div className="flex justify-end -mb-4">
          <button
            className="text-3xl cursor-pointer text-zinc-500"
            onClick={setIsOpen}
          >
            <IoIosClose />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-medium text-lg ">Meetings Title</h2>
            <p className=" text-zinc-500 text-sm">December 12, 12:40 PM</p>
          </div>
          <div className="flex items-center gap-2 ">
            <AiOutlineLink className="text-lg" />
            <Link
              href="https:yourmeetinglinks.com/ddjgsaw-adijuga"
              className="text-[15px] font-medium underline text-zinc-400"
            >
              https:yourmeetinglinks.com/ddjgsaw-adijuga
            </Link>
          </div>
          <div>
            <Label className="mb-3 text-zinc-400">
              Who&apos;s attend this meeting
            </Label>
            <div className="flex flex-col gap-4 p-3 border rounded-lg h-[180px] scroll-y overflow-y-scroll">
              <FriendItem />
              <FriendItem />
              <FriendItem />
              <FriendItem />
            </div>
          </div>
          <Button>Join Now!</Button>
        </div>
      </div>
    </Overlay>
  );
}
