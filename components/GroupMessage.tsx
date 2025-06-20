import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import GroupMessageHeader from "./GroupMessageHeader";

export default function GroupMessage() {
  return (
    <div className="  bg-white rounded-lg w-[65%] h-[95dvh] flex flex-col">
      <GroupMessageHeader />

      <div className="flex-1 px-12 py-4 overflow-y-scroll  flex flex-col gap-8 scroll-y ">
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
