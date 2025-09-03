import { create } from "zustand";
import { useNavigate } from "react-router-dom";

let nav = useNavigate();
const authStore = create((set) => ({
  credentials: {},
  saveDob: (dob) => set((state) => ({ credentials: { ...state, dob } })),
  saveEmail: (email) => set((state) => ({ credentials: { ...state, email } })),
}));

export const { credentials, saveDob, saveEmail } = authStore.getState();
