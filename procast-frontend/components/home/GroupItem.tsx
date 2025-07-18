import { useGroup } from "@/contexts/GroupContext";
import React from "react";
import { FaUsers } from "react-icons/fa";

export default function GroupItem({
  group,
}: {
  group: {
    id: number;
    name: string;
    message?: string | null;
  };
}) {
  const { setGroupId } = useGroup();
  console.log();

  return (
    <button
      className="px-6 py-4 rounded-lg lg:rounded-none cursor-pointer hover:bg-zinc-50 flex items-center justify-between transition ease-in-out  bg-white w-full "
      onClick={() => setGroupId(group.id)}
    >
      <div className="flex items-center gap-4  text-zinc-600">
        <FaUsers className="text-3xl text-primary-200" />
        <div className="text-start">
          <h3 className="font-medium ">{group?.name}</h3>
          <p className="text-sm text-zinc-400">
            {group.message ?? "Send a message"}
          </p>
        </div>
      </div>
    </button>
  );
}
