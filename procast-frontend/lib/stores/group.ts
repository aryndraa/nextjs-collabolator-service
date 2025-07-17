import { create } from "zustand";

export type Groups = {
  id: number;
  name: string;
  message?: string | null;
}[];

export type Group = {
  id: number;
  name: string;
  description: string | null;
  deadline: string | null;
};

interface GroupState {
  groups: Groups | null;
  group: Group | null;
  setGroups: (groups: Groups) => void;
  showGroup: (group: Group) => void;
  optimisticCreateGroup: (group: Group) => void;
}

export const useGroup = create<GroupState>()((set) => ({
  groups: null,
  group: null,
  setGroups: (groups) => set({ groups }),
  showGroup: (group) => set({ group }),
  optimisticCreateGroup: (newGroup) =>
    set((state) => ({ groups: [...(state.groups ?? []), newGroup] })),
}));
