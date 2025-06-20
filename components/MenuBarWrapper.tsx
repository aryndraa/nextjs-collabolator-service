"use client";

import { useMenuBar } from "@/contexts/MenuBarContext";
import MenuBar from "./MenuBar";

export default function MenuBarWrapper() {
  const { showMenuBar } = useMenuBar();
  return showMenuBar ? <MenuBar /> : null;
}
