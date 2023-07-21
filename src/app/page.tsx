import { type HomeResponse } from '@/@types/home'
import HomeMain from '@/components/home/HomeMain'
import HomeSkills from '@/components/home/HomeSkills'

const getHomeData = async (): Promise<HomeResponse> => {
  const res: Response = await fetch(`${process.env.API_URL}/api/home`, {
    method: 'get',
    headers: {
      authorization: `Bearer ${process.env.API_KEY}`
    },
    next: {
      revalidate: 60
    }
  })

  const data: HomeResponse = await res.json()

  return data
}

const Home = async (): Promise<JSX.Element> => {
  const { data } = await getHomeData()

  return (
    <>
      <HomeMain data={data} />
      <HomeSkills />
    </>
  )
}

export default Home
