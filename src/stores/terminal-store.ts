import { create } from 'zustand'

interface TerminalState {
  prompts: Prompt[]
  addPrompt: () => void
  updatePrompt: (index: number, prompt: Prompt) => void
  clearPrompts: () => void
}

const defaultPrompt: Prompt = {
  isActive: true,
  inputValue: '',
  children: null
}

const useTerminalStore = create<TerminalState>()((set, get) => ({
  prompts: [defaultPrompt],
  addPrompt: () => {
    set((state) => ({ prompts: [...state.prompts, defaultPrompt] }))
  },
  updatePrompt: (index, prompt) => {
    if (get().prompts[index] === undefined) return

    set((state) => {
      const prompts = [...state.prompts]
      prompts[index] = { ...prompts[index], ...prompt }
      return { prompts }
    })
  },
  clearPrompts: () => {
    set({ prompts: [] })
  }
}))

export default useTerminalStore
