import { type HomeSkillsIconProps } from '@/@types'
import { Svg } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { type Object3D } from 'three'

const HomeSkillsIcon = ({
  icon,
  position
}: HomeSkillsIconProps): JSX.Element => {
  const ref = useRef<Object3D>(null)

  useFrame(({ camera }) => {
    ref.current?.quaternion.copy(camera.quaternion)
  })

  return (
    <Svg
      ref={ref}
      src={icon}
      position={position}
      scale={0.2}
      fillMaterial={{ color: 'white' }}
    />
  )
}
export default HomeSkillsIcon
