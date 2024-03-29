import { type EducationsResponse } from '@/@types/educations'
import { type ExperiencesResponse } from '@/@types/experiences'
import { type HomeResponse } from '@/@types/home'
import { type ProjectsResponse } from '@/@types/projects'
import { type SkillCategoriesResponse } from '@/@types/skills'
import { rest } from 'msw'
import educationsResponse from './educations-response'
import experiencesResponse from './experiences-response'
import homeRes from './home-response'
import projectsResponse from './projects-response'
import skillsResponse from './skills-response'
import { wakaAllResponse } from './wakatime'
import { repositories } from './github'
import { gitHubUrl, wakaUrl } from '@/constants/endpoints'
import linkResponse from './link-response'

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home`,
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<HomeResponse>(homeRes))
  ),
  rest.get(
    '/api/home',
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<HomeResponse>(homeRes))
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/skill-categories`,
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<SkillCategoriesResponse>(skillsResponse)
      )
  ),
  rest.get(
    '/api/skill-categories',
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<SkillCategoriesResponse>(skillsResponse)
      )
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/experiences`,
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<ExperiencesResponse>(experiencesResponse)
      )
  ),
  rest.get(
    '/api/experiences',
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<ExperiencesResponse>(experiencesResponse)
      )
  ),
  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<ProjectsResponse>(projectsResponse))
  ),
  rest.get(
    '/api/projects',
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<ProjectsResponse>(projectsResponse))
  ),
  rest.get(
    `${process.env.API_KEY}/api/educations`,
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<EducationsResponse>(educationsResponse)
      )
  ),
  rest.get(
    '/api/educations',
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<EducationsResponse>(educationsResponse)
      )
  ),
  rest.get(
    `${process.env.API_KEY}/api/link`,
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<Link>(linkResponse))
  ),
  rest.get(
    '/api/link',
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<Link>(linkResponse))
  ),
  rest.get(
    `${wakaUrl}/api/v1/users/current/all_time_since_today`,
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json(wakaAllResponse))
  ),
  rest.get(
    `${gitHubUrl}/user/repos`,
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<Repository[]>(repositories))
  )
]
