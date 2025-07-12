import React from "react";
import { FiLink } from "react-icons/fi";
import { IoSend } from "react-icons/io5";

export default function MessageInput() {
  return (
    <div className="p-4 py-4 lg:py-6 border-t bg-white lg:bg-transparent ">
      <div className="flex items-center gap-2">
        <button className=" text-zinc-500 mx-2 lg:mx-4 rounded-full text-lg">
          <FiLink />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 lg:py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-200"
        />

        <button className="bg-primary-200 text-white px-4 py-3 lg:py-2 rounded-full ">
          <IoSend />
        </button>
      </div>
    </div>
  );
}
