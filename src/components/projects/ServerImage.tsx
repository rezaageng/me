import { generateBuffer } from '@/helpers/generate-buffer'
import Image from 'next/image'
interface Props {
  src: string
}

const ServerImage = async ({ src }: Props): Promise<JSX.Element> => {
  const blurData = await generateBuffer(src)

  return (
    <Image
      data-testid="project-cover"
      src={src}
      alt="cover"
      width={1280}
      height={720}
      placeholder="blur"
      blurDataURL={blurData}
      className="image aspect-video object-cover transition delay-150 duration-100 group-hover:grayscale-0 lg:grayscale-[70%]"
    />
  )
}
export default ServerImage
