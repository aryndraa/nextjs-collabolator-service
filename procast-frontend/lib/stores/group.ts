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
  deadline_project: string | null;
};

interface GroupState {
  groups: Groups | null;
  group: Group | null;
  setGroups: (groups: Groups) => void;
  groupCache: Record<string, Group>;
  showGroup: (group: Group) => void;
  optimisticCreateGroup: (group: Group) => void;
}

export const useGroup = create<GroupState>()((set) => ({
  groups: null,
  group: null,
  setGroups: (groups) => set({ groups }),
  groupCache: {},
  showGroup: (group) => {
    set((state) => ({
      group,
      groupCache: {
        ...state.groupCache,
        [group.id]: group,
      },
    }));
  },
  optimisticCreateGroup: (newGroup) =>
    set((state) => ({ groups: [...(state.groups ?? []), newGroup] })),
}));
