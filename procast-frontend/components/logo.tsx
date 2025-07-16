import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";

export default function Logo() {
  return (
    <div className="flex gap-3 items-center">
      <Image src={logo} alt="logo" className="size-6 lg:size-8" />
      <h1 className="font-semibold text-lg lg:text-2xl">Procast</h1>
    </div>
  );
}
