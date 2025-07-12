"use client";

import { usePathname } from "next/navigation";
import MenuBar from "./MenuBar";

export default function MenuBarWrapper() {
  const pathname = usePathname();

  // Daftar path yang ingin disembunyikan
  const hiddenPaths = ["/"];

  // Jika pathname cocok, jangan tampilkan MenuBar
  const showMenuBar = !hiddenPaths.includes(pathname);

  return showMenuBar ? <MenuBar /> : null;
}
