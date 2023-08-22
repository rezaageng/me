import { type ReactNode } from 'react'

interface Props {
  className?: string
  children: ReactNode
}

const BentoWrapper = ({ className = '', children }: Props): JSX.Element => {
  return (
    <>
      <div className="absolute h-full w-full rounded-3xl border border-secondary-400" />
      <div className="absolute h-full w-full bg-gradient-to-t from-secondary-900 opacity-70" />
      <div className="absolute h-1/2 w-full rounded-b-full bg-gradient-radial-t from-accent-1 to-accent-3 opacity-70 blur-3xl" />
      <div className={`${className} relative h-full w-full px-8 py-8 md:py-10`}>
        {children}
      </div>
    </>
  )
}
export default BentoWrapper
