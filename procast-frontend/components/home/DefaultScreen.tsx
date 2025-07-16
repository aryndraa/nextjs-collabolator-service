import Image from "next/image";
import React from "react";
import logo from "@/public/logosec.svg";

export default function DefaultScreen() {
  return (
    <div className=" min-h-[100dvh] w-full  items-center justify-center hidden lg:flex">
      <div className="flex flex-col items-center text-center w-[50%]">
        <Image src={logo} alt="logo" className="size-16 mb-4 opacity-80" />
        <h1 className="text-zinc-400 font-medium text-xl md:text-3xl mb-3">
          Procast Groupchat
        </h1>
        <p className="text-zinc-400 text-sm md:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
