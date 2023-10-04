import { type EducationsResponse } from '@/@types/educations'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

const TerminalEducations = (): JSX.Element => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['educations'],
    queryFn: async () => {
      const res: Response = await fetch('/api/educations')

      if (!res.ok) throw new Error('Network response was not ok')

      const { data }: EducationsResponse = await res.json()

      return data
    }
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>failed to get data</div>

  return (
    <ol>
      {data.map((education) => (
        <li key={uuidv4()} className="mb-1">
          <h1 data-testid="school-name">{education.attributes.name}</h1>
          <div className="flex flex-col pl-4">
            <span data-testid="majors">{education.attributes.major}</span>
            <span data-testid="date">{`${format(
              new Date(education.attributes.startDate),
              'MMM yyyy'
            )} -  ${format(
              new Date(education.attributes.endDate),
              'MMM yyyy'
            )}`}</span>
          </div>
        </li>
      ))}
    </ol>
  )
}
export default TerminalEducations
