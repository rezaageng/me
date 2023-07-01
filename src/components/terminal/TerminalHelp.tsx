import React from 'react'

const TerminalHelp = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <span>version 0.1.0</span>
      <span>usage: xe [option]</span>
      <div className="mt-2">
        <span>all options:</span>
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
        <span>other commands:</span>
        <ul className="pl-4">
          <li>clear</li>
        </ul>
      </div>
    </div>
  )
}

export default TerminalHelp
