import { create } from 'zustand'
import { type FramerState } from '@/@types'

const useFramerStore = create<FramerState>()((_set) => ({
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 50,
    restDelta: 0.001
  }
}))

export default useFramerStore
