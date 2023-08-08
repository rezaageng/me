import HomeMain from '@/components/home/HomeMain'
import HomeStats from '@/components/home/HomeStats'
import { getHomeData } from '@/ssg'

const Home = async (): Promise<JSX.Element> => {
  const homeRes = await getHomeData()

  return (
    <>
      <HomeMain data={homeRes.data} />
      <HomeStats />
    </>
  )
}

export default Home
