import { useGroup } from "@/contexts/GroupContext";
import { getMembers } from "@/utils/services/group";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import Overlay from "../Overlay";
import { Input } from "../ui/input";
import GroupMemberList from "./GroupMemberList";

type GroupMemberModalProps = {
  setOpenMember: () => void;
};

type Members = {
  id: number;
  name: string;
  role: string;
  avatar?: string;
};

export default function GroupMemberModal({
  setOpenMember,
}: GroupMemberModalProps) {
  const { groupId } = useGroup();
  const [search, setSearch] = useState<string>("");
  const [members, setMembers] = useState<Members[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGroupMember = async () => {
      try {
        const data = await getMembers(groupId!, search);
        setMembers(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupMember();
  }, [search, groupId]);

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
            onChange={(e) => setSearch(e.target.value)}
            className="py-6 focus:ring-primary-100/40! focus:border-primary-100!"
          />
          <GroupMemberList members={members} loading={loading} />
        </div>
      </div>
    </Overlay>
  );
}
