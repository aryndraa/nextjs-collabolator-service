"use client";
import GroupItem from "./GroupItem";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ListGroups() {
  const { data, isLoading } = useSWR("/api/group", fetcher);
  console.log(data);

  return (
    <div className="flex flex-col ">
      {data?.map((group: any) => (
        <GroupItem key={group.id} group={group} loading={isLoading} />
      ))}
    </div>
  );
}
