import { useQuery } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'

const TerminalSkills = ({
  categoryId
}: {
  categoryId?: number | null
}): JSX.Element => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['skill-categories'],
    queryFn: async () => {
      const res: Response = await fetch('/api/skill-categories')

      const { data }: SkillCategoriesResponse = await res.json()

      return data
    }
  })

  if (isLoading) return <span>loading...</span>
  if (isError) return <span>failed to get data</span>

  if (categoryId !== null)
    return (
      <>
        {data
          ?.filter((skillCategory) => skillCategory.id === categoryId)
          .map((skillCategory: SkillCategory) => (
            <div key={uuidv4()}>
              <span>{skillCategory.attributes.category}</span>
              <ul className="mb-1 pl-4">
                {skillCategory.attributes.skills.data.map((skill: Skill) => (
                  <li key={uuidv4()}>{skill.attributes.name}</li>
                ))}
              </ul>
            </div>
          ))}
      </>
    )

  return (
    <>
      {data?.map((skillCategory: SkillCategory) => (
        <div key={uuidv4()}>
          <span>{skillCategory.attributes.category}</span>
          <ul className="mb-1 pl-4">
            {skillCategory.attributes.skills.data.map((skill: Skill) => (
              <li key={uuidv4()}>{skill.attributes.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
export default TerminalSkills
