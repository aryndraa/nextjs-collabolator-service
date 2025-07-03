import React from "react";
import useSWR from "swr";
import { useGroup } from "@/contexts/GroupContext";
import FriendItem from "./FriendItem";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GroupMemberList() {
  const { groupId } = useGroup();
  const { data } = useSWR(`/api/group/${groupId}/participant`, fetcher);

  console.log(data);

  return (
    <div className="flex flex-col gap-3 p-4 border rounded-lg h-[320px] scroll-y overflow-y-scroll">
      {data?.length === 0 ? (
        <p className="text-zinc-400">No members found.</p>
      ) : (
        data?.map((participant: any, index) => (
          <FriendItem key={index} user={participant.user} type={["kick"]} />
        ))
      )}
    </div>
  );
}
