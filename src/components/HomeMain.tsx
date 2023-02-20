import { type HomeResponse } from '@/@types'
import Image from 'next/image'

const HomeMain = ({ data }: HomeResponse): JSX.Element => {
  return (
    <div
      data-testid="home-main"
      className="flex min-h-screen w-full flex-col justify-center px-8 py-4"
    >
      <div>
        <Image
          data-testid="main-character"
          src="/assets/images/mc.png"
          width={2738}
          height={4000}
          alt="rezaa"
        />
      </div>
      <h1>{data?.attributes.title}</h1>
    </div>
  )
}
export default HomeMain
