import { Input } from "@/components/ui/input";
import React from "react";
import Logo from "./logo";
import { GoPlus } from "react-icons/go";

export default function GroupLinks() {
  return (
    <div className="w-64 border-r h-screen">
      <div className="w-full flex justify-start p-5 border-b ">
        <Logo />
      </div>
      <div className="">
        <div className="flex justify-between pb-4 mb-4 border-b py-4 px-5">
          <h2>All Group</h2>
          <button className="text-2xl cursor-pointer">
            <GoPlus />
          </button>
        </div>
        <div className=" px-5">
          <Input
            type="text"
            placeholder="Search Group"
            className="py-5 shadow-none focus:border-zinc-200! focus:ring-0! rounded-md "
          />
        </div>
      </div>
    </div>
  );
}
