import { create } from "zustand";

type Profile = {
  name: string;
  bio: string | null;
  link: string | null;
  avatar: string | null;
};

type UserState = {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  clearProfile: () => void;
};

export const useUser = create<UserState>()((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  clearProfile: () => set({ profile: null }),
}));
