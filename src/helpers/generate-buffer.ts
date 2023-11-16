import { getPlaiceholder } from 'plaiceholder'

export const generateBuffer = async (url: string): Promise<string> => {
  const buffer = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  const { base64 } = await getPlaiceholder(buffer)

  return base64
}
