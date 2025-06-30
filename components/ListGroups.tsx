"use client";
import GroupItem from "./GroupItem";
import useSWR from "swr";
import { Skeleton } from "./ui/skeleton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ListGroups() {
  const { data, isLoading } = useSWR("/api/group", fetcher);
  console.log(data);

  return (
    <div className="flex flex-col ">
      {isLoading ? (
        <div className="w-full">
          <div className=" px-6 py-4 flex gap-2">
            <Skeleton className="size-9  rounded-full" />
            <div>
              <Skeleton className="h-6  w-40 mb-2  rounded-lg" />
              <Skeleton className="h-4  w-40 rounded-lg" />
            </div>
          </div>
          <div className=" px-6 py-4 flex gap-2">
            <Skeleton className="size-9  rounded-full" />
            <div>
              <Skeleton className="h-6  w-40 mb-2  rounded-lg" />
              <Skeleton className="h-4  w-40 rounded-lg" />
            </div>
          </div>
          <div className=" px-6 py-4 flex gap-2">
            <Skeleton className="size-9  rounded-full" />
            <div>
              <Skeleton className="h-6  w-40 mb-2  rounded-lg" />
              <Skeleton className="h-4  w-40 rounded-lg" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          {data?.map((group: any) => (
            <GroupItem key={group.id} group={group} loading={isLoading} />
          ))}
        </div>
      )}
    </div>
  );
}
