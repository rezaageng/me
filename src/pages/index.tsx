import HomeMain from '@/components/HomeMain'
import HomeSkills from '@/components/HomeSkills'
import { type GetStaticProps } from 'next'
import { type HomeResponse } from '../@types'

const Home = ({ data }: HomeResponse): JSX.Element => {
  return (
    <>
      <HomeMain data={data} />
      <HomeSkills />
      {/* <div className="min-h-screen" id="two" /> */}
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  data: HomeResponse['data']
}> = async () => {
  try {
    const res: Response = await fetch(`${process.env.API_URL}/home`, {
      method: 'get',
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      }
    })

    const { data }: HomeResponse = await res.json()

    if (data === undefined) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        data
      },
      revalidate: 60
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default Home
