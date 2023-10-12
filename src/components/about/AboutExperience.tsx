'use client'

import { type ExperiencesResponse } from '@/@types/experiences'
import { transition } from '@/constants/framer-motion'
import { format } from 'date-fns'
import { motion } from 'framer-motion'

interface Props {
  data: ExperiencesResponse['data']
}

const AboutExperience = ({ data }: Props): JSX.Element => {
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
      transition={{ ...transition, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-white">Experience</h2>
      <ul className="flex flex-col gap-2">
        {data.map((exp) => (
          <li key={exp.id}>
            <span className="text-sm text-white">
              {format(new Date(exp.attributes.startDate), 'MMM yyyy')} -&nbsp;
              {exp.attributes.currentlyEmployed
                ? 'Present'
                : format(
                    new Date(exp.attributes.endDate as string),
                    'MMM yyyy'
                  )}
            </span>
            <h3 className="text-lg font-semibold text-accent-1">
              {exp.attributes.title}
            </h3>
            <p className="text-gray-300/75">
              {exp.attributes.employmentType}
              {exp.attributes.companyName !== null
                ? ' · ' + exp.attributes.companyName
                : ''}
            </p>
            {exp.attributes.location !== null ? (
              <p className="text-gray-300/75">{exp.attributes.location}</p>
            ) : null}
            <p className="">{exp.attributes.description}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
export default AboutExperience
