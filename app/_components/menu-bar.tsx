"use client"; // wajib kalau kamu pakai usePathname di komponen klien

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaCalendarAlt, FaBell, FaToolbox } from "react-icons/fa";

const navigationItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "Project Room",
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
  const pathname = usePathname(); // 👈 ambil path saat ini

  return (
    <div className="bg-white fixed bottom-0 left-0 right-0 border-t border-zinc-200">
      <div className="flex justify-between px-6 pt-3 pb-3">
        {navigationItems.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <Link
              href={item.link}
              key={index}
              className={`flex flex-col gap-1 items-center ${
                isActive ? "text-zinc-800" : "text-zinc-300"
              }`}
            >
              <span className="text-[22px]">{item.icon}</span>
              <span className="text-xs font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
