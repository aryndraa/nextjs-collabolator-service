"use client"; // wajib kalau kamu pakai usePathname di komponen klien

import Link from "next/link";
import React, { useState } from "react";
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
    link: "/workspace",
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`bg-white fixed bottom-0 lg:top-0 left-0 right-0 lg:right-auto border-t lg:border-r lg:border-t-0 border-zinc-200
    transition-all duration-300 ease-in-out overflow-hidden 
    ${isOpen ? "lg:w-64" : "lg:w-20"}`}
    >
      <div>
        <div className="hidden lg:flex  border-b px-5 py-4">
          <button
            className="text-2xl p-2 hover:bg-primary-100 hover:text-white transition ease-in-out duration-500 rounded-lg  cursor-pointer flex items-center gap-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMenu />
            <span
              className={`text-xs lg:text-sm  font-semibold pr-2 ${
                isOpen ? "" : "lg:hidden"
              }`}
            >
              Menu
            </span>
          </button>
        </div>
        <div className="flex lg:flex-col  justify-between px-6 lg:px-0  pt-3 lg:pt-4 pb-3 ">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <Link
                href={item.link}
                key={index}
                className={`flex flex-col lg:flex-row   gap-1 lg:gap-4 items-center lg:py-5 lg:px-7 lg:border-r-2  lg:border-r-transparent transition ${
                  isActive
                    ? "text-primary-100 lg:bg-primary-100/10 lg:border-r-violet-800"
                    : "text-zinc-400 hover:bg-zinc-50 "
                } `}
              >
                <span className="text-[22px] lg:text-xl">{item.icon}</span>
                <span
                  className={`text-xs lg:text-sm  font-semibold ${
                    isOpen ? "" : "lg:hidden"
                  }`}
                >
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
