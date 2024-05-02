import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface KawaiiState {
  kawaii: boolean
  setKawaii: (kawaii: boolean) => void
}

export const useKawaiiStore = create<KawaiiState>()(
  persist(
    (set) => ({
      kawaii: false,
      setKawaii: (kawaii) => {
        set({ kawaii })
      }
    }),
    {
      name: 'kawaii-storage'
    }
  )
)
