const GrainyTexture = (): JSX.Element => {
  return (
    <>
      <svg data-testid="grainy-texture">
        <filter id="grainyTexture" data-testid="grainy-texture-filter">
          <feTurbulence
            type="turbulence"
            baseFrequency={0.65}
            stitchTiles="stitch"
            data-testid="grainy-texture-feTurbulence"
          />
        </filter>
      </svg>
    </>
  )
}
export default GrainyTexture
