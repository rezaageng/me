import {
  type Skill,
  type SkillCategory,
  type SkillCategoriesResponse
} from '@/@types/skills'
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

      if (!res.ok) throw new Error('Network response was not ok')

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
            <div key={uuidv4()} data-testid="skill-category">
              <span data-testid="category-title">
                {skillCategory.attributes.category}
              </span>
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
        <div key={uuidv4()} data-testid="skill-category">
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
