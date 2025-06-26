import { FaUserCircle } from "react-icons/fa";

export default function FriendItem() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <FaUserCircle className="text-2xl text-zinc-400" />
        <span className="font-medium text-zinc-500 ">Dyven Siaw</span>
      </div>
      <div>
        <button className="px-4 py-2 text-sm font-medium bg-primary-100 text-white rounded-lg">
          Invite
        </button>
      </div>
    </div>
  );
}
