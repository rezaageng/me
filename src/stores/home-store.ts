import { type HomeResponse } from '@/@types/home'
import { create } from 'zustand'

interface HomeState {
  homeData: HomeResponse | null
  setHomeData: (homeData: HomeResponse) => void
}

const useHomeStore = create<HomeState>()((set) => ({
  homeData: null,
  setHomeData: (homeData) => {
    set({ homeData })
  }
}))

export default useHomeStore
