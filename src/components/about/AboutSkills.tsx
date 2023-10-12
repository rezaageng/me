'use client'

import { type SkillCategoriesResponse } from '@/@types/skills'
import { transition } from '@/constants/framer-motion'
import { motion } from 'framer-motion'

interface Props {
  data: SkillCategoriesResponse['data']
}

const AboutSkills = ({ data }: Props): JSX.Element => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{ ...transition, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold text-white">Skills</h2>
      <ul>
        {data.map((cat) => (
          <li key={cat.id}>
            <h3 className="text-lg font-semibold">{cat.attributes.category}</h3>
            <p className="text-gray-300/75">
              {cat.attributes.skills.data
                .map((skill) => skill.attributes.name)
                .join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
export default AboutSkills
