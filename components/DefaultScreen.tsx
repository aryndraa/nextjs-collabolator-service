import Image from "next/image";
import React from "react";
import logo from "@/public/logosec.svg";

export default function DefaultScreen() {
  return (
    <div className="flex min-h-[100dvh] w-full  items-center justify-center">
      <div className="flex flex-col items-center text-center w-[50%]">
        <Image src={logo} alt="logo" className="size-16 mb-4 opacity-80" />
        <h1 className="text-zinc-500 font-medium text-3xl mb-3">
          Procast Groupchat
        </h1>
        <p className="text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis et a
          saepe fuga praesentium nesciunt aspernatur laborum veritatis harum
          odio?
        </p>
      </div>
    </div>
  );
}
