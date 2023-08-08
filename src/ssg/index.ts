import { type HomeResponse } from '@/@types/home'
import { type SkillCategoriesResponse } from '@/@types/skills'

export const getHomeData = async (): Promise<HomeResponse> => {
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

export const getSkills = async (): Promise<SkillCategoriesResponse> => {
  const res: Response = await fetch(
    `${process.env.API_URL}/api/skill-categories?populate=skills`,
    {
      method: 'get',
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      },
      next: {
        revalidate: 60
      }
    }
  )

  const data: SkillCategoriesResponse = await res.json()

  return data
}

export const getWakaAll = async (): Promise<WakaAllTime> => {
  const token: string = Buffer.from(process.env.WAKA_KEY ?? '').toString(
    'base64'
  )

  const res: Response = await fetch(
    `${process.env.WAKA_URL}/api/v1/users/current/all_time_since_today`,
    {
      method: 'get',
      headers: {
        authorization: `Basic ${token}`
      },
      next: {
        revalidate: 10
      }
    }
  )

  const data: WakaAllTime = await res.json()

  return data
}
