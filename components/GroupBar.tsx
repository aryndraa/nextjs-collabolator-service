"use client";
import React, { useState } from "react";
import GroupListMeetings from "./GroupListMeetings";
import GroupListAssignment from "./GroupListAssignment";

export default function GroupBar() {
  const [tabCon, setTabCon] = useState<boolean>(false);

  return (
    <div className="lg:h-[95dvh] bg-white w-[35%] rounded-lg p-6">
      <div className="flex gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-full transition cursor-pointer ${
            !tabCon ? "bg-primary-100 text-white" : "bg-white text-zinc-500"
          }`}
          onClick={() => setTabCon(false)}
        >
          Meetings
        </button>
        <button
          className={`px-6 py-2 rounded-full transition cursor-pointer ${
            tabCon ? "bg-primary-100 text-white" : "bg-white text-zinc-500"
          }`}
          onClick={() => setTabCon(true)}
        >
          Assigments
        </button>
      </div>

      {!tabCon ? <GroupListMeetings /> : <GroupListAssignment />}
    </div>
  );
}
