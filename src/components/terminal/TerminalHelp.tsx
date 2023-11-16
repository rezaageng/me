import TerminalAscii from './TerminalAscii'

const TerminalHelp = (): JSX.Element => {
  return (
    <div className="flex gap-8">
      <TerminalAscii />
      <div className="flex flex-col">
        <span className="text-accent-1">rezaa.me</span>
        <span>--------</span>
        <span className="text-accent-1">
          version {process.env.NEXT_PUBLIC_APP_VERSION}
        </span>
        <span>usage: xe [option]</span>
        <div className="mt-2">
          <span className="text-accent-1">all options:</span>
          <ul className="pl-4">
            <li>summary</li>
            <li>skills</li>
            <li>experience</li>
            <li>projects</li>
            <li>educations</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="mt-2">
          <span className="text-accent-1">other commands:</span>
          <ul className="pl-4">
            <li>clear</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TerminalHelp
