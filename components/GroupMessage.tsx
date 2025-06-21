import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import GroupMessageHeader from "./GroupMessageHeader";

export default function GroupMessage() {
  return (
    <div className="  lg:bg-white rounded-lg w-full lg:w-[65%] h-[100vdh] lg:h-[95dvh] flex flex-col relative z-[9999]">
      <GroupMessageHeader />

      <div className="flex-1 px-5 lg:px-12 py-4 overflow-y-scroll max-h-[73vh] lg:max-h-full flex flex-col gap-8 scroll-y ">
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
