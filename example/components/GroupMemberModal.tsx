import Overlay from "./Overlay";
import { IoIosClose } from "react-icons/io";
import { Input } from "./ui/input";
import GroupMemberList from "./GroupMemberList";

type GroupMemberModalProps = {
  setOpenMember: () => void;
};

export default function GroupMemberModal({
  setOpenMember,
}: GroupMemberModalProps) {
  return (
    <Overlay>
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="flex justify-end -mb-4">
          <button
            className="text-3xl cursor-pointer text-zinc-500"
            onClick={setOpenMember}
          >
            <IoIosClose />
          </button>
        </div>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl font-semibold mb-1">Group Member</h1>
          <p>See who’s in the group</p>
        </div>
        <div className="flex flex-col gap-6">
          <Input
            placeholder={"Search Friend"}
            className="py-6 focus:ring-primary-100/40! focus:border-primary-100!"
          />
          <GroupMemberList />
        </div>
      </div>
    </Overlay>
  );
}
