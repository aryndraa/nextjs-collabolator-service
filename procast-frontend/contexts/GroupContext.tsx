"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type GroupContextType = {
  groupId: number | undefined;
  setGroupId: (id: number | undefined) => void;
};

const GroupContext = createContext<GroupContextType | undefined>(undefined);

export const GroupProvider = ({ children }: { children: ReactNode }) => {
  const [groupId, setGroupId] = useState<number | undefined>(undefined);

  return (
    <GroupContext.Provider value={{ groupId, setGroupId }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroup must be used within a GroupProvider");
  }
  return context;
};
