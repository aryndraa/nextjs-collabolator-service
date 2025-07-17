"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import GroupItem from "./GroupItem";
import { getGroups } from "@/utils/services/group";
import { useGroup } from "@/lib/stores/group";

export default function ListGroups() {
  const [loading, setLoading] = useState(true);
  const groups = useGroup((state) => state.groups);
  const setGroups = useGroup((state) => state.setGroups);

  useEffect(() => {
    const fetchGroups = async () => {
      if (!groups) {
        const data = await getGroups();
        setGroups(data.data);
      }

      setLoading(false);
    };

    fetchGroups();
  }, [groups, setGroups]);

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
          {groups.map((group) => (
            <GroupItem key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}
