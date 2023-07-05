import { useQuery } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'

const TerminalExperience = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['experience'],
    queryFn: async () => {
      const res: Response = await fetch('/api/experiences')

      if (!res.ok) throw new Error('Network response was not ok')

      const { data }: ExperiencesResponse = await res.json()

      return data
    }
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>failed to get data</div>

  return (
    <ol>
      {data?.map((experience) => (
        <li className="mb-1" key={uuidv4()}>
          <h1 data-testid="experience-title">{experience.attributes.title}</h1>
          <div className="flex flex-col pl-4">
            <h2>
              <span data-testid="company-name">
                {experience.attributes.companyName !== null
                  ? experience.attributes.companyName + ' - '
                  : null}
              </span>
              <span data-testid="employment-type">
                {experience.attributes.employmentType}
              </span>
            </h2>
            <span data-testid="start-end-date">{`${format(
              new Date(experience.attributes.startDate),
              'MMM yyyy'
            )} - ${
              experience.attributes.currentlyEmployed &&
              experience.attributes.endDate === null
                ? 'Present'
                : format(
                    new Date(experience.attributes.endDate as string),
                    'MMM yyyy'
                  )
            }`}</span>
            <span>{experience.attributes.location}</span>
          </div>
        </li>
      ))}
    </ol>
  )
}
export default TerminalExperience
