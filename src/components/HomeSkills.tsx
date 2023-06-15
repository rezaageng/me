'use client'

import { Float, TrackballControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HomeSkillsCloud from './HomeSkillsCloud'
import { ResizeObserver } from '@juggle/resize-observer'

const HomeSkills = (): JSX.Element => {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center px-8 sm:flex-row">
      <div className="flex w-full flex-col gap-4 sm:flex-1">
        <h1
          className="w-auto text-4xl font-bold text-accent-1 lg:text-5xl"
          data-testid="skills-title"
        >
          Skills
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptatem beatae rerum earum autem sunt ut,
          perferendis, magnam officia qui repellat, a ratione accusamus magni in
          sequi facilis. Voluptate, earum.
        </p>
      </div>
      <div className="aspect-square w-full sm:flex-1">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 35], fov: 90 }}
          resize={{ polyfill: ResizeObserver }}
          data-testid="3d-canvas"
        >
          <fog attach="fog" args={['#0D0409', 0, 80]} />
          <Float>
            <HomeSkillsCloud />
          </Float>
          <TrackballControls rotateSpeed={5} noPan noZoom />
        </Canvas>
      </div>
    </div>
  )
}
export default HomeSkills
