import { type ContactsResponse } from '@/@types/contacts'
import { type EducationsResponse } from '@/@types/educations'
import { type ExperiencesResponse } from '@/@types/experiences'
import { type HomeResponse } from '@/@types/home'
import { type ProjectsResponse } from '@/@types/projects'
import { type SkillCategoriesResponse } from '@/@types/skills'
import { rest } from 'msw'
import contactsResponse from './contacts-response'
import educationsResponse from './educations-response'
import experiencesResponse from './experiences-response'
import homeRes from './home-response'
import projectsResponse from './projects-response'
import skillsResponse from './skills-response'

export const handlers = [
  rest.get(
    `${process.env.API_URL}/api/home`,
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<HomeResponse>(homeRes))
  ),
  rest.get(
    '/api/home',
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<HomeResponse>(homeRes))
  ),
  rest.get(
    `${process.env.API_URL}/api/skill-categories`,
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
    `${process.env.API_URL}/api/experiences`,
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
    `${process.env.API_URL}/api/projects`,
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
    `${process.env.API_KEY}/api/contacts`,
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<ContactsResponse>(contactsResponse))
  ),
  rest.get(
    '/api/contacts',
    async (_req, res, ctx) =>
      await res(ctx.status(200), ctx.json<ContactsResponse>(contactsResponse))
  )
]
