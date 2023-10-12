'use client'

import { type EducationsResponse } from '@/@types/educations'
import { transition } from '@/constants/framer-motion'
import { format } from 'date-fns'
import { motion } from 'framer-motion'

interface Props {
  data: EducationsResponse['data']
}

const AboutEducations = ({ data }: Props): JSX.Element => {
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
      transition={{ ...transition, delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-gray-300">Educations</h2>
      <ul className="flex flex-col gap-2">
        {data.map((education) => (
          <li key={education.id}>
            <span className="text-sm text-white">
              {format(new Date(education.attributes.startDate), 'MMM yyyy')}
              &nbsp;-&nbsp;
              {format(new Date(education.attributes.endDate), 'MMM yyyy')}
            </span>
            <h3 className="text-lg font-semibold text-accent-1">
              {education.attributes.name}
            </h3>
            <p className="text-gray-300/75">
              {education.attributes.degree !== null
                ? education.attributes.degree + ': '
                : null}
              {education.attributes.major}
            </p>
            <p>{education.attributes.location}</p>
            <p className="">{education.attributes.description}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default AboutEducations
