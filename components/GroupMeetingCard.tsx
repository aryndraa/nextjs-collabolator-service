import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import { IoSettings } from "react-icons/io5";

export default function GroupMeetingCard() {
  return (
    <div className="p-4 border rounded-lg">
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
          <button className="w-full flex-1 flex justify-center py-2 text-white rounded-lg text-sm font-medium bg-primary-100">
            Join Meeting
          </button>
          <button className="flex justify-center p-2 text-primary-100 rounded-lg text-lg font-medium border border-primary-100">
            <IoSettings />
          </button>
        </div>
      </div>
    </div>
  );
}
