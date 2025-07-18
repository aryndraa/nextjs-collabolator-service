"use client";

import React from "react";
import GroupNavigation from "./GroupNavigation";
import MobileGroupNavigation from "./MobileGroupNavigation";
import DefaultScreen from "./DefaultScreen";
import { useGroup } from "@/contexts/GroupContext";
import GroupScreen from "./GroupScreen";

export default function HomeContent() {
  const { groupId } = useGroup();

  return (
    <div className="flex">
      <div className="w-full lg:w-auto">
        <div className="hidden lg:block">
          <GroupNavigation />
        </div>
        {groupId ?? <MobileGroupNavigation />}
      </div>

      {groupId ? <GroupScreen /> : <DefaultScreen />}
    </div>
  );
}
