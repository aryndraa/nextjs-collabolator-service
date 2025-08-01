import { create } from "zustand";

export type Profile = {
  data: {
    id: number;
    profile: {
      name: string;
      bio: string | null;
      link: string | null;
      avatar: string | null;
    };
  };
};

interface UserState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  clearProfile: () => void;
}

export const useUser = create<UserState>()((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  profile: null,
  setProfile: (profile) => {
    localStorage.setItem("hasProfile", "true");
    set({ profile });
  },
  clearProfile: () => {
    localStorage.removeItem("hasProfile");
    set({ profile: null });
  },
}));
