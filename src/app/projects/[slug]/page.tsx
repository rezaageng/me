import { getProject, getProjects } from '@/ssg'
import { v4 as uuidv4 } from 'uuid'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { type SerializeOptions } from 'next-mdx-remote/dist/types'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { SiGithub } from 'react-icons/si'
import { AiOutlineLink } from 'react-icons/ai'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.min.css'
import { type Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { data } = await getProject(params.slug)

  const seo = data.attributes.seo

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,

    alternates: {
      canonical: seo.canonicalUrl
    },
    openGraph: {
      title: seo.metaSocial[0].title,
      description: seo.metaSocial[0].description,
      type: 'website',
      url: seo.canonicalUrl,
      images: [
        {
          url: seo.metaSocial[0].image.data.attributes.formats.large.url,
          width: seo.metaSocial[0].image.data.attributes.formats.large.width,
          height: seo.metaSocial[0].image.data.attributes.formats.large.height,
          alt:
            seo.metaSocial[0].image.data.attributes.alternativeText ??
            'large image'
        },
        {
          url: seo.metaSocial[0].image.data.attributes.formats.medium.url,
          width: seo.metaSocial[0].image.data.attributes.formats.medium.width,
          height: seo.metaSocial[0].image.data.attributes.formats.medium.height,
          alt:
            seo.metaSocial[0].image.data.attributes.alternativeText ??
            'medium image'
        },
        {
          url: seo.metaSocial[0].image.data.attributes.formats.small.url,
          width: seo.metaSocial[0].image.data.attributes.formats.small.width,
          height: seo.metaSocial[0].image.data.attributes.formats.small.height,
          alt:
            seo.metaSocial[0].image.data.attributes.alternativeText ??
            'small image'
        },
        {
          url: seo.metaSocial[0].image.data.attributes.formats.thumbnail.url,
          width:
            seo.metaSocial[0].image.data.attributes.formats.thumbnail.width,
          height:
            seo.metaSocial[0].image.data.attributes.formats.thumbnail.height,
          alt:
            seo.metaSocial[0].image.data.attributes.alternativeText ??
            'thumbnail image'
        }
      ]
    },
    twitter: {
      title: seo.metaSocial[1].title
    }
  }
}

const Project = async ({ params }: Props): Promise<JSX.Element> => {
  const { data } = await getProject(params.slug)

  const options: SerializeOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      // @ts-expect-error rehypeHighlight type issue
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight]
    }
  }

  return (
    <article className="m-auto flex max-w-2xl flex-col gap-6 p-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-4xl font-semibold">
          {data.attributes.name}
        </h1>
        <div className="flex justify-center gap-4 text-white/50">
          {data.attributes.repository !== null ? (
            <a
              href={data.attributes.repository}
              target="_blank"
              className="flex items-center gap-2 transition duration-300 hover:animate-pulse hover:text-accent-1"
            >
              <SiGithub />
              Repository
            </a>
          ) : null}
          {data.attributes.website !== null ? (
            <a
              href={data.attributes.website}
              target="_blank"
              className="flex items-center gap-2 transition duration-300 hover:animate-pulse hover:text-accent-1"
            >
              <AiOutlineLink />
              {data.attributes.websiteLabel ?? 'Link'}
            </a>
          ) : null}
        </div>
        <ul className="flex flex-wrap justify-center gap-2">
          {data.attributes.skills.data.map((skill) => (
            <li
              data-testid="skills"
              key={uuidv4()}
              className="whitespace-nowrap rounded-full bg-accent-2/40 px-2 py-1 text-xs text-accent-1"
            >
              {skill.attributes.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-1 w-full rounded-full bg-gradient-to-r from-accent-3 to-accent-1" />
      <div className="prose prose-invert prose-a:text-accent-1 prose-code:scrollbar-thin prose-code:scrollbar-track-transparent prose-code:scrollbar-thumb-secondary-400 prose-pre:border prose-pre:border-white/25 prose-pre:p-0 prose-pre:scrollbar-thumb-rounded-full prose-img:rounded-lg">
        <MDXRemote source={data.attributes.description} options={options} />
      </div>
    </article>
  )
}

export const generateStaticParams = async (): Promise<Props[]> => {
  const { data } = await getProjects({})

  return data.map((project) => ({
    params: {
      slug: project.attributes.slug
    }
  }))
}

export default Project
