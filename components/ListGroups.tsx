import prisma from "@/lib/prisma";
import React from "react";
import GroupItem from "./GroupItem";

export default async function ListGroups() {
  const groups = await prisma.group.findMany();

  return (
    <div className="flex flex-col ">
      <GroupItem />
      <GroupItem />
      <GroupItem />
    </div>
  );
}
