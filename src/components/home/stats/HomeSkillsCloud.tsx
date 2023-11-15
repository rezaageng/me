import { Spherical, Vector3 } from 'three'
import { v4 as uuidv4 } from 'uuid'
import { useMemo } from 'react'
import HomeSkillsIcon from './HomeSkillsIcon'
import isFloat from '@/helpers/isFloat'

const HomeSkillsCloud = (): JSX.Element => {
  const icons = useMemo(() => {
    const temp: Array<[Vector3, string]> = []
    const skills: string[] = [
      'js',
      'ts',
      'dart',
      'html5',
      'css',
      'md',
      'vsc',
      'git',
      'github',
      'intellij',
      'nodejs',
      'npm',
      'react',
      'nextjs',
      'flutter',
      'tailwind',
      'styled',
      'framer',
      'strapi',
      'three',
      'reactquery',
      'apollo',
      'pnpm',
      'jest',
      'rtl'
    ]

    const lengthSqrt = Math.sqrt(skills.length)
    const count = isFloat(lengthSqrt) ? Math.floor(lengthSqrt) + 1 : lengthSqrt

    const spherical = new Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count

    let currIndex = 0

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new Vector3().setFromSpherical(
            spherical.set(16, phiSpan * i, thetaSpan * j)
          ),
          skills[currIndex] !== undefined
            ? `/assets/icons/${skills[currIndex]}.svg`
            : '/assets/icons/lock.svg'
        ])
        currIndex++
      }
    }
    return temp
  }, [])

  return (
    <group scale={0.9}>
      {icons.map(([pos, icon]) => (
        <HomeSkillsIcon key={uuidv4()} position={pos} icon={icon} />
      ))}
    </group>
  )
}
export default HomeSkillsCloud
