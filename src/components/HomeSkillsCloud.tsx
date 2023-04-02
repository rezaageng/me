import { Spherical, Vector3 } from 'three'
import * as Icons from 'react-icons/si'
import { HiLockClosed } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid'
import { renderToString } from 'react-dom/server'
import { useMemo } from 'react'
import HomeSkillsIcon from './HomeSkillsIcon'
import isFloat from '@/helpers/isFloat'

const HomeSkillsCloud = (): JSX.Element => {
  const icons = useMemo(() => {
    const temp: Array<[Vector3, string]> = []
    const skills: JSX.Element[] = [
      <Icons.SiJavascript key={uuidv4()} />,
      <Icons.SiTypescript key={uuidv4()} />,
      <Icons.SiDart key={uuidv4()} />,
      <Icons.SiHtml5 key={uuidv4()} />,
      <Icons.SiCss3 key={uuidv4()} />,
      <Icons.SiNodedotjs key={uuidv4()} />,
      <Icons.SiNpm key={uuidv4()} />,
      <Icons.SiPnpm key={uuidv4()} />,
      <Icons.SiReact key={uuidv4()} />,
      <Icons.SiRedux key={uuidv4()} />,
      <Icons.SiNextdotjs key={uuidv4()} />,
      <Icons.SiFlutter key={uuidv4()} />,
      <Icons.SiTailwindcss key={uuidv4()} />,
      <Icons.SiStyledcomponents key={uuidv4()} />,
      <Icons.SiFramer key={uuidv4()} />,
      <Icons.SiThreedotjs key={uuidv4()} />,
      <Icons.SiStrapi key={uuidv4()} />,
      <Icons.SiJest key={uuidv4()} />,
      <Icons.SiTestinglibrary key={uuidv4()} />,
      <Icons.SiFigma key={uuidv4()} />,
      <Icons.SiGit key={uuidv4()} />,
      <Icons.SiGithub key={uuidv4()} />,
      <Icons.SiVisualstudiocode key={uuidv4()} />,
      <Icons.SiIntellijidea key={uuidv4()} />
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
            ? renderToString(skills[currIndex])
            : renderToString(<HiLockClosed />)
        ])
        currIndex++
      }
    }
    return temp
  }, [])

  return (
    <group scale={0.7}>
      {icons.map(([pos, icon]) => (
        <HomeSkillsIcon key={uuidv4()} position={pos} icon={icon} />
      ))}
    </group>
  )
}
export default HomeSkillsCloud
