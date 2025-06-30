import { useGroup } from "@/contexts/GroupContext";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { Skeleton } from "./ui/skeleton";

export default function GroupItem({ group, loading = false }: any) {
  const { setGroupId } = useGroup();
  console.log();

  if (loading) {
    <div>
      <div className=" px-6 py-4 flex gap-2">
        <Skeleton className="size-12  rounded-full" />
        <div>
          <Skeleton className="h-8  w-40 mb-2  rounded-lg" />
          <Skeleton className="h-4  w-40 rounded-lg" />
        </div>
      </div>
      <div className=" px-6 py-4 flex gap-2">
        <Skeleton className="size-12  rounded-full" />
        <div>
          <Skeleton className="h-8  w-40 mb-2  rounded-lg" />
          <Skeleton className="h-4  w-40 rounded-lg" />
        </div>
      </div>
      <div className=" px-6 py-4 flex gap-2">
        <Skeleton className="size-12  rounded-full" />
        <div>
          <Skeleton className="h-8  w-40 mb-2  rounded-lg" />
          <Skeleton className="h-4  w-40 rounded-lg" />
        </div>
      </div>
    </div>;
  }

  return (
    <button
      className="px-6 py-4 mx-3 lg:mx-0 rounded-lg lg:rounded-none cursor-pointer hover:bg-zinc-50 flex items-center justify-between transition ease-in-out  bg-white "
      onClick={() => setGroupId(group.id)}
    >
      <div className="flex items-center gap-4  text-zinc-600">
        <FaUsers className="text-3xl text-primary-200" />
        <div className="text-start">
          <h3 className="font-medium ">{group?.name}</h3>
          <p className="text-sm text-zinc-400">
            {group?.messageRecipients?.[0].message.text}
          </p>
        </div>
      </div>
      <div className="size-6  text-xs bg-primary-100 font-medium text-white flex items-center justify-center rounded-full ">
        12
      </div>
    </button>
  );
}
