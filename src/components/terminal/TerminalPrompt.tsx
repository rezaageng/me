import { TbBrandNextjs } from 'react-icons/tb'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import useCommandHandlers from '@/hooks/useCommandHandlers'

interface InputPrompt {
  input: string
}

const TerminalPrompt = ({
  children,
  isActive,
  inputValue,
  index
}: Prompt & { index: number }): JSX.Element => {
  const { register, handleSubmit, setFocus } = useForm<InputPrompt>({
    defaultValues: { input: inputValue }
  })

  const handleCommand = useCommandHandlers()

  const submitPrompt: SubmitHandler<InputPrompt> = ({ input }): void => {
    handleCommand(index, input)
  }

  useEffect(() => {
    if (isActive === null || isActive === undefined) return

    if (isActive) {
      setFocus('input')
    }
  }, [isActive, setFocus])

  return (
    <div className="mb-2" data-testid="terminal-prompt">
      <div className="flex justify-between">
        <div className="flex">
          <span className="text-indigo-400">&nbsp;</span>
          <span className="text-accent-1">rezaa</span>
          <span className="text-gray-200">@</span>
          <span className="text-rose-400">xe&nbsp;</span>
          <span className="text-accent-2">~</span>
        </div>
        <span
          data-testid="terminal-next-ver"
          className="flex items-center gap-1 text-accent-3"
        >
          <TbBrandNextjs />
          <span>v13.4.5</span>
        </span>
      </div>
      <form onSubmit={handleSubmit(submitPrompt)}>
        <input
          data-testid="terminal-input"
          type="text"
          id="input"
          {...register('input')}
          disabled={isActive === false}
          autoComplete="off"
          autoCorrect="off"
          className="w-full bg-primary focus:outline-none"
        />
      </form>
      {children}
    </div>
  )
}

export default TerminalPrompt
