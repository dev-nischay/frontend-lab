import { create } from "zustand";

export const useSidebar = create((set) => ({
  show: false,
  toggle: () => set((state) => ({ show: !state.show })),
}));

export const { toggle } = useSidebar.getState();
