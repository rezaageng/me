import { type HomeSkillsIconProps } from '@/@types'
import { Svg, type SvgProps } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { type Object3D } from 'three'

const HomeSkillsIcon = ({
  icon,
  position
}: HomeSkillsIconProps): JSX.Element => {
  const ref = useRef<Object3D & SvgProps>(null)

  useFrame(({ camera }) => {
    if (ref.current === null) return
    ref.current?.quaternion.copy(camera.quaternion)
  })

  return (
    <Svg
      ref={ref}
      src={icon}
      position={position}
      scale={0.2}
      fillMaterial={{
        color: '#fff'
      }}
    />
  )
}
export default HomeSkillsIcon
