import TerminalContact from '@/components/terminal/TerminalContact'
import TerminalEducations from '@/components/terminal/TerminalEducations'
import TerminalError from '@/components/terminal/TerminalError'
import TerminalExperience from '@/components/terminal/TerminalExperience'
import TerminalHelp from '@/components/terminal/TerminalHelp'
import TerminalProjects from '@/components/terminal/TerminalProjects'
import TerminalSkills from '@/components/terminal/TerminalSkills'
import TerminalSummary from '@/components/terminal/TerminalSummary'
import useTerminalStore from '@/stores/terminal-store'

type CommandHandlers = (index: number, input: string) => void

const useCommandHandlers = (): CommandHandlers => {
  const [addPrompt, updatePrompt, clearPrompts] = useTerminalStore((state) => [
    state.addPrompt,
    state.updatePrompt,
    state.clearPrompts
  ])

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
          children: <TerminalExperience />
        })
      } else if (option === 'projects') {
        updatePrompt(index, {
          children: <TerminalProjects />
        })
      } else if (option === 'educations') {
        updatePrompt(index, {
          children: <TerminalEducations />
        })
      } else if (option === 'contact') {
        updatePrompt(index, {
          children: <TerminalContact />
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
