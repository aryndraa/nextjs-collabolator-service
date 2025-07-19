import React from "react";
import { useGroup } from "@/contexts/GroupContext";
import FriendItem from "../FriendItem";
import { Skeleton } from "../ui/skeleton";

type Member = {
  id: number;
  name: string;
  role: string;
  avatar?: string;
};

type Members = Member[];

export default function GroupMemberList({
  members,
  loading,
}: {
  members: Members[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="flex flex-col gap-3 p-4 border rounded-lg h-[320px] scroll-y overflow-y-scroll">
        <Skeleton className="w-full h-14" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 border rounded-lg h-[320px] scroll-y overflow-y-scroll">
      {members.map((member, key) => (
        <FriendItem key={key} type={["kick"]} user={member} />
      ))}
      <p className="text-zinc-400">No members found.</p>
    </div>
  );
}
