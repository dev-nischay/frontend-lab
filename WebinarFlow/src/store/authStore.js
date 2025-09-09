import { create } from "zustand";
export const authStore = create((set) => ({
  credentials: {},
  saveDob: (dob) =>
    set((state) => ({ credentials: { ...state.credentials, ...dob } })),
  saveEmail: (email) =>
    set((state) => ({ credentials: { ...state.credentials, ...email } })),
}));

export const { credentials, saveDob, saveEmail } = authStore.getState();
