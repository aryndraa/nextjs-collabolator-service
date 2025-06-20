import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

export default function GroupMessage() {
  return (
    <div className=" pt-4 bg-white rounded-lg w-[70%] h-[93dvh] flex flex-col">
      <div className="flex-1 px-12 overflow-y-scroll  flex flex-col gap-8 ">
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
