import useTerminalStore from '@/store/terminal-store'
import { act, renderHook } from '@testing-library/react'

test('should add a new prompt', () => {
  const { result } = renderHook(() => useTerminalStore())

  act(() => {
    result.current.addPrompt()
  })

  expect(result.current.prompts).toHaveLength(2)
})

test('should update a prompt', () => {
  const { result } = renderHook(() => useTerminalStore())

  act(() => {
    result.current.updatePrompt(0, { inputValue: 'test', isActive: false })
  })

  expect(result.current.prompts[0].inputValue).toBe('test')
})

test('should update with children', () => {
  const { result } = renderHook(() => useTerminalStore())

  const children = <span>hello</span>

  act(() => {
    result.current.updatePrompt(0, {
      children,
      isActive: false,
      inputValue: 'test'
    })
  })

  // eslint-disable-next-line testing-library/no-node-access
  expect(result.current.prompts[0].children).toEqual(children)
})

test('should clear all prompts', () => {
  const { result } = renderHook(() => useTerminalStore())

  act(() => {
    result.current.clearPrompts()
  })

  expect(result.current.prompts).toHaveLength(0)
})
