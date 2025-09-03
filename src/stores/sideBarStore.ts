import type { MenuItem } from "@/types/sideBar.ts";
import { create } from "zustand";

interface SideBarState {
  currentItem: MenuItem;
  actions: SideBarActions;
}

interface SideBarActions {
  setCurrentItem: (item: MenuItem) => void;
  isActive: (item: MenuItem) => boolean;
}

export const sideBarStore = create<SideBarState>((set, get) => ({
  currentItem: "dashboard",
  actions: {
    setCurrentItem: (item) => set({ currentItem: item }),
    isActive: (item) => (
      get().currentItem === item
    ),
  },
}));
