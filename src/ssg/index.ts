import { type EducationsResponse } from '@/@types/educations'
import { type ExperiencesResponse } from '@/@types/experiences'
import { type HomeResponse } from '@/@types/home'
import { type ProjectResponse, type ProjectsResponse } from '@/@types/projects'
import { type SkillCategoriesResponse } from '@/@types/skills'
import { wakaUrl } from '@/constants/endpoints'

export const getHomeData = async (): Promise<HomeResponse> => {
  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home`,
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

  const data: HomeResponse = await res.json()

  return data
}

export const getSkills = async (): Promise<SkillCategoriesResponse> => {
  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/skill-categories?populate=skills`,
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
  if (
    process.env.WAKA_KEY === undefined ||
    process.env.WAKA_KEY === '' ||
    process.env.WAKA_KEY === null
  )
    throw new Error('Waka Key is not defined')

  const token: string = Buffer.from(process.env.WAKA_KEY).toString('base64')

  const res: Response = await fetch(
    `${wakaUrl}/api/v1/users/current/all_time_since_today`,
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

  if (!res.ok) throw new Error('Internal Server Error')

  const data: WakaAllTime = await res.json()

  return data
}

export const getWakaWeek = async (): Promise<WakaWeek> => {
  if (
    process.env.WAKA_KEY === undefined ||
    process.env.WAKA_KEY === '' ||
    process.env.WAKA_KEY === null
  )
    throw new Error('Waka Key is not defined')

  const token: string = Buffer.from(process.env.WAKA_KEY).toString('base64')

  const leadersRes: Response = await fetch(`${wakaUrl}/api/v1/leaders`, {
    method: 'get',
    headers: {
      authorization: `Basic ${token}`
    },
    next: {
      revalidate: 10
    }
  })

  const leadersRegRes: Response = await fetch(
    `${wakaUrl}/api/v1/leaders?country_code=${process.env.WAKA_COUNTRY_CODE}`,
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

  const statsRes: Response = await fetch(
    `${wakaUrl}/api/v1/users/current/stats?including_today=true`,
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

  if (!leadersRes.ok || !leadersRegRes.ok || !statsRes.ok)
    throw new Error('Internal Server Error')

  const leadersData = await leadersRes.json()
  const leadersRegData = await leadersRegRes.json()
  const stats = await statsRes.json()

  const data: WakaWeek = {
    worldRank: leadersData.current_user.rank,
    countryRank: leadersRegData.current_user.rank,
    totalSeconds: stats.data.total_seconds_including_other_language,
    dailyAverage: stats.data.daily_average_including_other_language,
    languages: stats.data.languages.map((lang: Record<string, string>) => ({
      name: lang.name,
      total: lang.text
    }))
  }

  return data
}

export const getExperience = async (): Promise<ExperiencesResponse> => {
  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/experiences?sort=startDate:desc`,
    {
      method: 'get',
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      },
      next: {
        revalidate: 10
      }
    }
  )

  if (!res.ok) throw new Error('Internal Server Error')

  const data: ExperiencesResponse = await res.json()

  return data
}

export const getEducations = async (): Promise<EducationsResponse> => {
  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/educations?sort=startDate:desc`,
    {
      method: 'get',
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      },
      next: {
        revalidate: 10
      }
    }
  )

  if (!res.ok) throw new Error('Internal Server Error')

  const data: EducationsResponse = await res.json()

  return data
}

export const getProjects = async ({
  isPinned
}: {
  isPinned?: boolean
}): Promise<ProjectsResponse> => {
  const res: Response = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/api/projects?sort=createdAt:desc&populate=*${
      isPinned !== undefined
        ? `&filters[isPinned][$eq]=${isPinned.toString()}`
        : ''
    }`,
    {
      method: 'get',
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      },
      next: {
        revalidate: 10
      }
    }
  )

  if (!res.ok) throw new Error('Internal Server Error')

  const data: ProjectsResponse = await res.json()

  return data
}

export const getProject = async (slug: string): Promise<ProjectResponse> => {
  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}?populate=*`,
    {
      method: 'get',
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      },
      next: {
        revalidate: 10
      }
    }
  )

  if (!res.ok) throw new Error('Internal Server Error')

  const data: ProjectResponse = await res.json()

  return data
}

export const getLink = async (): Promise<Link> => {
  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/link`,
    {
      method: 'get',
      headers: {
        authorization: `Bearer ${process.env.API_KEY}`
      },
      next: {
        revalidate: 10
      }
    }
  )

  if (!res.ok) throw new Error('Internal Server Error')

  const data: Link = await res.json()

  return data
}
