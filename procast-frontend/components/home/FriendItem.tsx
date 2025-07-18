import { FaUserCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

type FriendItemProps = {
  type?: string[];
  user?: any;
};

export default function FriendItem({ type = [], user }: FriendItemProps) {
  return (
    <div className="flex justify-between items-center p-3 border rounded-lg bg-zinc-100">
      <div className="flex gap-2 items-center">
        <FaUserCircle className="text-2xl text-zinc-400" />
        <span className="font-medium text-zinc-500 ">
          {user?.name ?? "Member name"}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {type.includes("invitation") && (
          <button className="px-4 py-2 text-sm font-medium border border-transparent bg-primary-100 text-white rounded-lg">
            Invite
          </button>
        )}
        {type.includes("friend") && (
          <button className="px-4 py-2 text-sm font-medium border border-primary-100 bg-white text-primary-100 rounded-lg">
            Add Friend
          </button>
        )}
        {type.includes("kick") && (
          <button className="px-2 py-2 text-lg font-medium border border-transparent bg-red-600 text-white rounded-lg">
            <IoCloseCircle />
          </button>
        )}
      </div>
    </div>
  );
}
