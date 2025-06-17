"use client"; // wajib kalau kamu pakai usePathname di komponen klien

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaCalendarAlt, FaBell, FaToolbox } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const navigationItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "Workspace",
    link: "/project-room",
    icon: <FaToolbox />,
  },
  {
    name: "Schedule",
    link: "/schedule",
    icon: <FaCalendarAlt />,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: <FaBell />,
  },
];

export default function MenuBar() {
  const pathname = usePathname();

  return (
    <div className=" bg-white fixed bottom-0 lg:top-0 left-0 right-0 lg:right-auto  border-t lg:border-r lg:border-t-0 border-zinc-200">
      <div>
        <div className="hidden lg:flex justify-center w-full border-b py-4">
          <button className=" text-2xl p-2 hover:bg-zinc-950 hover:text-white transition ease-in-out duration-500 rounded-lg  cursor-pointer">
            <IoMenu />
          </button>
        </div>
        <div className="flex lg:flex-col  justify-between px-6 lg:px-0  pt-3 lg:pt-4 pb-3 ">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <Link
                href={item.link}
                key={index}
                className={`flex flex-col  gap-1 lg:gap-2 items-center lg:py-5 lg:px-5 lg:border-r-2  lg:border-r-transparent hover:bg-zinc-100 transition ${
                  isActive
                    ? "text-zinc-950 lg:border-r-zinc-950"
                    : "text-zinc-300"
                }`}
              >
                <span className="text-[22px] lg:text-xl">{item.icon}</span>
                <span className="text-xs lg:hidden font-semibold">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
