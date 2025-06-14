"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { RiDashboardFill } from "react-icons/ri";
import Logo from "./logo";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: RiDashboardFill,
  },
];

type Group = {
  id: number;
  name: string;
};

export function AppSidebar() {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const res = await fetch("/api/group");
        const data = await res.json();
        setGroups(data.data || []); // tergantung struktur GetGroupsResource
      } catch (err) {
        console.error("Gagal mengambil grup", err);
      }
    }

    fetchGroups();
  }, []);

  return (
    <Sidebar>
      <SidebarHeader className="px-5 py-6">
        <Logo />
      </SidebarHeader>
      <SidebarContent className="px-3 ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm text-zinc-400 mb-1">
            Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive className="py-6 px-4">
                    <a href={item.url}>
                      <item.icon className="text-2xl" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm text-zinc-400 mb-1">
            Group
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {groups.length === 0 ? (
                <div className="w-full flex justify-center  text-zinc-400">
                  <p>No Group</p>
                </div>
              ) : (
                groups.map((group) => (
                  <SidebarMenuItem key={group.id}>
                    <SidebarMenuButton asChild className="py-6 px-4">
                      <a href={`/group/${group.id}`}>
                        <span>{group.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
              <Button className="bg-primary-100 hover:bg-primary-300 py-6 text-white mt-4">
                Create Group
              </Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
