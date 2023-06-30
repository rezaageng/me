import TerminalError from '@/components/terminal/TerminalError'
import TerminalHelp from '@/components/terminal/TerminalHelp'
import TerminalSkills from '@/components/terminal/TerminalSkills'
import TerminalSummary from '@/components/terminal/TerminalSummary'
import useTerminalStore from '@/stores/terminal-store'
import { shallow } from 'zustand/shallow'

type CommandHandlers = (index: number, input: string) => void

const useCommandHandlers = (): CommandHandlers => {
  const [addPrompt, updatePrompt, clearPrompts] = useTerminalStore(
    (state) => [state.addPrompt, state.updatePrompt, state.clearPrompts],
    shallow
  )

  const handle: CommandHandlers = (index, input) => {
    const [command, option, ...args] = input.split(' ')

    if (command === 'xe') {
      if (
        option === '' ||
        option === '--help' ||
        option === '-h' ||
        option === undefined
      ) {
        updatePrompt(index, {
          children: <TerminalHelp />
        })
      } else if (option === 'summary') {
        updatePrompt(index, {
          children: <TerminalSummary />
        })
      } else if (option === 'skills') {
        let categoryId: number | null = null

        switch (args[0]) {
          case '--langs':
            categoryId = 1
            break
          case '--tools':
            categoryId = 2
            break
          case '--libs':
            categoryId = 3
            break
          case '--tests':
            categoryId = 4
            break
          default:
            categoryId = null
            break
        }

        updatePrompt(index, {
          children: <TerminalSkills categoryId={categoryId} />
        })
      } else if (option === 'experience') {
        updatePrompt(index, {
          children: <p>experience</p>
        })
      } else if (option === 'projects') {
        updatePrompt(index, {
          children: <p>projects</p>
        })
      } else if (option === 'educations') {
        updatePrompt(index, {
          children: <p>educations</p>
        })
      } else if (option === 'contact') {
        updatePrompt(index, {
          children: <p>contact</p>
        })
      } else {
        updatePrompt(index, {
          children: <TerminalError option={option} />
        })
      }
    } else if (input === '') {
      updatePrompt(index, {
        children: null
      })
    } else if (input === 'clear') {
      clearPrompts()
      return
    } else {
      updatePrompt(index, {
        children: <TerminalError command={command} />
      })
    }

    updatePrompt(index, {
      isActive: false,
      inputValue: input
    })
    addPrompt()
  }

  return handle
}

export default useCommandHandlers
