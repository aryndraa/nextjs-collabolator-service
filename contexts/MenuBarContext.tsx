"use client";

import { createContext, useContext, useState } from "react";

type MenuBarContextType = {
  showMenuBar: boolean;
  setShowMenuBar: (value: boolean) => void;
};

const MenuBarContext = createContext<MenuBarContextType | undefined>(undefined);

export const MenuBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showMenuBar, setShowMenuBar] = useState(true);

  return (
    <MenuBarContext.Provider value={{ showMenuBar, setShowMenuBar }}>
      {children}
    </MenuBarContext.Provider>
  );
};

export const useMenuBar = () => {
  const context = useContext(MenuBarContext);
  if (!context) {
    throw new Error("useMenuBar must be used within a MenuBarProvider");
  }
  return context;
};
