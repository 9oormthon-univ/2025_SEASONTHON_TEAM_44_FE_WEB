import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthState = {
  isLoggedIn: boolean;
  refreshToken: string;
  accessToken: string;
  login: (tokens?: { accessToken?: string; refreshToken?: string }) => void;
  logout: () => void;
};


export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      refreshToken: '',
      accessToken: '',
      login: (tokens) =>
        set((s) => ({
          isLoggedIn: true,
          accessToken: tokens?.accessToken ?? s.accessToken,
          refreshToken: tokens?.refreshToken ?? s.refreshToken,
        })),
      logout: () => set({ isLoggedIn: false, accessToken: '', refreshToken: '' }),
    }),
    {
      name: 'auth-store', // localStorage key
      storage: createJSONStorage(() => localStorage),
      // 저장할 필드만 선택
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
      version: 1,
    }
  )
);
