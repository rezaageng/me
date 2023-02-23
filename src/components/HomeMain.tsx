import { type HomeResponse } from '@/@types'
import Image from 'next/image'

const HomeMain = ({ data }: HomeResponse): JSX.Element => {
  return (
    <div
      data-testid="home-main"
      className="relative m-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-8 py-4 sm:static sm:min-h-screen sm:flex-row sm:items-center sm:justify-evenly"
    >
      <Image
        data-testid="main-character"
        src="/assets/images/mc.png"
        width={512}
        height={748}
        alt="rezaa"
      />
      <div className="absolute bottom-4 flex flex-col sm:static">
        <div className="h-48 w-full bg-gradient-to-t from-primary sm:hidden" />
        <div className="flex flex-col gap-4 bg-primary">
          <h1 data-testid="title" className="text-4xl font-bold sm:text-5xl">
            {data?.attributes.title}
          </h1>
          <h2 data-testid="subtitle" className="text-2xl font-bold opacity-75">
            {data?.attributes.subtitle}
          </h2>
          <p data-testid="description" className="sm:max-w-sm">
            {data?.attributes.description}
          </p>
          <button className="self-start rounded-full bg-accent-1 px-8 py-2 text-2xl">
            Start
          </button>
        </div>
      </div>
    </div>
  )
}
export default HomeMain
