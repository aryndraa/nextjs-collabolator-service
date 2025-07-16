"use client";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import GroupItem from "./GroupItem";

export default function ListGroups() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col ">
      {loading ? (
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
        <div className="w-full">{/* <GroupItem group={group} /> */}</div>
      )}
    </div>
  );
}
