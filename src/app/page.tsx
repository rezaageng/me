import { type HomeResponse } from '@/@types'
import HomeMain from '@/components/HomeMain'
import HomeSkills from '@/components/HomeSkills'

const getHomeData = async (): Promise<HomeResponse['data'] | null> => {
  try {
    const res: Response = await fetch(`${process.env.API_URL}/home`, {
      method: 'get',
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      },
      next: {
        revalidate: 60
      }
    })

    const { data }: HomeResponse = await res.json()

    if (data === undefined) return null

    return data
  } catch (error) {
    return null
  }
}

const Home = async (): Promise<JSX.Element> => {
  const data: HomeResponse['data'] = await getHomeData()

  return (
    <>
      <HomeMain data={data} />
      <div className="min-h-[60dvh]" id="two" />
      <HomeSkills />
    </>
  )
}

export default Home
