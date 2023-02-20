import { type HomeResponse } from '@/@types'
import HomeMain from './components/HomeMain'

const getData = async (): Promise<HomeResponse> => {
  const res = await fetch(`${process.env.API_URL}/home`, {
    method: 'get',
    headers: {
      authorization: `Bearer ${process.env.API_KEY}`
    }
  })

  if (!res.ok) {
    throw new Error('error')
  }

  return await res.json()
}

const Home = async (): Promise<JSX.Element> => {
  const { data } = await getData()

  return (
    <>
      <HomeMain data={data} />
    </>
  )
}
export default Home
