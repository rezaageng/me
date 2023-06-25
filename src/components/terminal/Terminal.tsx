import useTerminalStore from '@/stores/terminal-store'
import TerminalPrompt from './TerminalPrompt'
import { v4 as uuidv4 } from 'uuid'

const Terminal = (): JSX.Element => {
  const prompts = useTerminalStore((state) => state.prompts)

  return (
    <div
      className="h-96 w-full overflow-hidden rounded-lg border border-white font-mono text-sm"
      data-testid="terminal"
    >
      <div className="sticky flex gap-2 p-3">
        <div
          className="aspect-square w-3 rounded-full bg-red-500"
          data-testid="terminal-button-red"
        />
        <div
          className="aspect-square w-3 rounded-full bg-yellow-500"
          data-testid="terminal-button-yellow"
        />
        <div
          className="aspect-square w-3 rounded-full bg-green-500"
          data-testid="terminal-button-green"
        />
      </div>
      <div className="h-[calc(100%-36px)] w-full overflow-y-scroll px-4 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary-400">
        {prompts.map(({ children, inputValue, isActive }, index) => (
          <TerminalPrompt
            key={uuidv4()}
            inputValue={inputValue}
            isActive={isActive}
            index={index}
          >
            {children}
          </TerminalPrompt>
        ))}
      </div>
    </div>
  )
}

export default Terminal
