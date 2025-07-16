"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import GroupItem from "./GroupItem";
import { getGroups } from "@/utils/services/group";

type Groups = {
  data: [
    {
      id: number;
      name: string;
      message?: string;
    }
  ];
};

export default function ListGroups() {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<Groups>();

  useEffect(() => {
    const fetchGroups = async () => {
      const data = await getGroups();
      setGroups(data);
      setLoading(false);
    };

    fetchGroups();
  }, []);

  return (
    <div className="flex flex-col ">
      {loading || !groups ? (
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
          {groups.data.map((group) => (
            <GroupItem key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}
