import { TrackballControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HomeSkillsCloud from './HomeSkillsCloud'
import { ResizeObserver } from '@juggle/resize-observer'

const HomeSkills = (): JSX.Element => {
  return (
    <div className="h-[100dvh] w-full">
      <Canvas
        className="h-full"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 35], fov: 90 }}
        resize={{ polyfill: ResizeObserver }}
        data-testid="3d-canvas"
      >
        <fog attach="fog" args={['#202025', 0, 80]} />
        <HomeSkillsCloud />
        <TrackballControls rotateSpeed={5} noPan noZoom />
      </Canvas>
    </div>
  )
}
export default HomeSkills
