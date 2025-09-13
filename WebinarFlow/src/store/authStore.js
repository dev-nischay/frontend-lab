import { create } from "zustand";
export const authStore = create((set) => ({
  credentials: {},
  saveDob: (dob) =>
    set((state) => ({ credentials: { ...state.credentials, ...dob } })),
  saveDetails: (details) =>
    set((state) => ({ credentials: { ...state.credentials, ...details } })),
}));

export const { credentials, saveDob, saveDetails } = authStore.getState();
