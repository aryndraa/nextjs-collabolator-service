import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import GroupMessageHeader from "./GroupMessageHeader";
import { useGroup } from "@/contexts/GroupContext";
import { Skeleton } from "../ui/skeleton";

export default function GroupMessage() {
  if (false) {
    return (
      <div className="w-[65%]">
        <Skeleton className="w-full bg-zinc-300 rounded-lg h-full" />
      </div>
    );
  }

  return (
    <div className="  lg:bg-white rounded-lg w-full lg:w-[65%] h-[100vdh] lg:h-[95dvh] flex flex-col relative lg:z-0 z-[9999]">
      {/* <GroupMessageHeader group={group} /> */}

      <div className="flex-1 px-5 lg:px-12 py-4 overflow-y-scroll max-h-[78vh] lg:max-h-full flex flex-col gap-8 scroll-y pb-24 ">
        <Message user={true} content="Yes, let’s meet at 2 PM." />
        <Message
          user={false}
          content="Hey, are we meeting today?"
          sender="Alice"
        />
        <Message
          user={false}
          content="Hey, are we meeting today?"
          sender="Alice"
        />
        <Message user={true} content="Yes, let’s meet at 2 PM." />
        <Message
          user={false}
          content="Hey, are we meeting today?"
          sender="Alice"
        />
        <Message user={true} content="Yes, let’s meet at 2 PM." />
        <Message
          user={false}
          content="Hey, are we meeting today?"
          sender="Alice"
        />
      </div>

      <MessageInput />
    </div>
  );
}
