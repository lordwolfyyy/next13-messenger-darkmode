import { create } from 'zustand'

interface SidebarStore {
  isOpen: boolean;
  isDarkMode: boolean; // Add dark mode state
  onOpen: () => void;
  onClose: () => void;
  toggleDarkMode: () => void; // Function to toggle dark mode
}

const useSidebar = create<SidebarStore>((set) => ({
  isOpen: false,
  isDarkMode: false, // Initialize dark mode as false
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })), // Toggle dark mode
}));

export default useSidebar;
