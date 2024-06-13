import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: (value: boolean) => void;
}

export const useSidebar = create<SidebarState>((set, get) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: (value) => set({ isOpen: value }),
}));
