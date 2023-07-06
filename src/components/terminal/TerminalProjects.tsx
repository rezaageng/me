import { type ProjectsResponse } from '@/@types/projects'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

const TerminalProjects = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res: Response = await fetch('/api/projects')

      if (!res.ok) throw new Error('Internal Server Error')

      const { data }: ProjectsResponse = await res.json()

      return data
    }
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>failed to get data</div>

  return (
    <ol>
      {data?.map((project) => (
        <li className="mb-2" key={uuidv4()}>
          <h1 data-testid="project-title">
            <Link
              className="hover:text-accent-1"
              href={`/projects/${project.id}`}
              data-testid="project-link"
            >
              {project.attributes.name} 
            </Link>
          </h1>
          <p data-testid="project-description" className="line-clamp-3 pl-4">
            {project.attributes.description}
          </p>
        </li>
      ))}
    </ol>
  )
}
export default TerminalProjects
