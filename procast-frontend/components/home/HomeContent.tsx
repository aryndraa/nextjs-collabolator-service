"use client";

import React from "react";
import GroupNavigation from "./GroupNavigation";
import MobileGroupNavigation from "./MobileGroupNavigation";
import DefaultScreen from "./DefaultScreen";
import { useGroup } from "@/contexts/GroupContext";

export default function HomeContent() {
  const { groupId } = useGroup();

  return (
    <div className="flex">
      <div>
        <div className="hidden lg:block">
          <GroupNavigation />
        </div>
        <MobileGroupNavigation />
      </div>

      {groupId ? "" : <DefaultScreen />}
    </div>
  );
}
