import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import { IoSettings } from "react-icons/io5";
import Button from "./Button";
import { useState } from "react";
import GroupMeetingModal from "./GroupMeetingModal";

export default function GroupMeetingCard() {
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  return (
    <div className="p-4 border rounded-lg bg-zinc-100">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-semibold">Meeting Title</h3>
          <p className="text-sm text-zinc-500">December 12, 12:40 PM</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex text-zinc-400 ">
            <FaUserCircle />
            <FaUserCircle />
            <FaUserCircle />
          </div>
          <span className="text-sm text-zinc-600">20 Attended</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-3">
          <AiOutlineLink className="text-lg" />
          <Link
            href="https:yourmeetinglinks.com/ddjgsaw-adijuga"
            className="text-[15px] font-medium underline"
          >
            https:yourmeetinglinks.com/ddas..
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button>Join Meeting</Button>
          <button
            onClick={() => setOpenEdit(true)}
            className="flex justify-center p-2  rounded-lg text-lg font-medium border text-primary-100 border-primary-100"
          >
            <IoSettings />
          </button>
        </div>
      </div>

      {openEdit && (
        <GroupMeetingModal setIsOpen={() => setOpenEdit(false)} type="update" />
      )}
    </div>
  );
}
