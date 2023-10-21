interface ErrorPrompt {
  command?: string
  option?: string
}

const TerminalError = ({ command, option }: ErrorPrompt): JSX.Element => {
  return (
    <div className="flex flex-col">
      <span className="mb-2">
        {command !== undefined ? 'command' : 'option'} not found:&nbsp;
        {command ?? option}
      </span>
      <span>try &quot;xe --help&quot;</span>
    </div>
  )
}

export default TerminalError
