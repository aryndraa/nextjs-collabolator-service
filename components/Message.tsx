import React from "react";

type MessageProps = {
  user: boolean;
  content: string;
  sender?: string;
};

export default function Message({ user, content, sender }: MessageProps) {
  if (user) {
    return (
      <div className="flex flex-col items-end  ">
        <div>
          <div className="bg-primary-200 text-white p-3 px-4 rounded-xl rounded-br-none shadow-sm text-sm md:text-base mb-2 min-w-[20%]">
            {content}
          </div>
          <p className="text-xs lg:text-sm self-start">9:30 pm</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start lg:gap-2 w-fit">
      <div className="bg-white p-3 px-4 rounded-xl rounded-bl-none border-zinc-400 text-sm md:text-base mb-2 min-w-[20%] border">
        {content}
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2 text-sm lg:text-[15px]">
          <span className="size-4 lg:size-5 bg-zinc-400 text-white rounded-full flex items-center justify-center text-xs font-medium">
            {sender?.[0] || "?"}
          </span>
          {sender}
        </div>
        <p className="text-xs lg:text-sm">9:30 pm</p>
      </div>
    </div>
  );
}
