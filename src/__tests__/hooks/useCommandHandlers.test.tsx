import TerminalContact from '@/components/terminal/TerminalContact'
import TerminalEducations from '@/components/terminal/TerminalEducations'
import TerminalError from '@/components/terminal/TerminalError'
import TerminalExperience from '@/components/terminal/TerminalExperience'
import TerminalHelp from '@/components/terminal/TerminalHelp'
import TerminalProjects from '@/components/terminal/TerminalProjects'
import TerminalSkills from '@/components/terminal/TerminalSkills'
import TerminalSummary from '@/components/terminal/TerminalSummary'
import useCommandHandlers from '@/hooks/useCommandHandlers'
import useTerminalStore from '@/stores/terminal-store'
import { renderHook } from '@testing-library/react'

jest.mock('@/stores/terminal-store', () => ({
  __esModule: true,
  default: jest.fn()
}))

afterEach(() => {
  jest.clearAllMocks()
})

test('should handles "xe" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])

  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalHelp />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe --help" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])

  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe --help')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalHelp />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe -h" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])

  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe -h')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalHelp />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe summary" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])

  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe summary')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalSummary />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe skills" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])

  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe skills')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalSkills categoryId={null} />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe skills --langs" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])

  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe skills --langs')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalSkills categoryId={1} />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe skills --tools" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])

  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe skills --tools')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalSkills categoryId={2} />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe skills --libs" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])

  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe skills --libs')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalSkills categoryId={3} />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe skills --tests" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()

  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe skills --tests')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalSkills categoryId={4} />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe experience" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()
  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe experience')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalExperience />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe projects" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()
  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe projects')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalProjects />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe educations" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()
  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe educations')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalEducations />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe contact" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()
  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe contact')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalContact />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles empty command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()
  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, '')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: null
  })

  expect(addPrompt).toHaveBeenCalled()
})

test('should handles "xe clear" command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()
  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'clear')

  expect(clearPrompts).toHaveBeenCalled()
})

test('should handles unknown command', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()
  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'yuh')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalError command="yuh" />
  })
  expect(addPrompt).toHaveBeenCalled()
})

test('should handles unknown option', () => {
  const addPrompt = jest.fn()
  const updatePrompt = jest.fn()
  const clearPrompts = jest.fn()
  const store = useTerminalStore as unknown as jest.Mock

  store.mockReturnValueOnce([addPrompt, updatePrompt, clearPrompts])
  const { result } = renderHook(() => useCommandHandlers())
  const handle = result.current

  handle(0, 'xe shur')

  expect(updatePrompt).toHaveBeenCalledWith(0, {
    children: <TerminalError option="shur" />
  })
  expect(addPrompt).toHaveBeenCalled()
})
