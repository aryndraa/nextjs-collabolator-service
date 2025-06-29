import React from "react";
import GroupNavigation from "./GroupNavigation";
import MobileGroupNavigation from "./MobileGroupNavigation";
import DefaultScreen from "./DefaultScreen";
import GroupScreen from "./GroupScreen";

export default function HomeContent() {
  return (
    <div className="flex">
      <div>
        <div className="hidden lg:block">
          <GroupNavigation />
        </div>
        <MobileGroupNavigation />
      </div>

      <GroupScreen />

      <DefaultScreen />
    </div>
  );
}
