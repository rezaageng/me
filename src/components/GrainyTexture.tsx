const GrainyTexture = (): JSX.Element => {
  return (
    <>
      <svg className="h-0 w-0" data-testid="grainy-texture">
        <filter id="grainyTexture" data-testid="grainy-texture-filter">
          <feTurbulence
            type="turbulence"
            baseFrequency={0.65}
            stitchTiles="stitch"
            data-testid="grainy-texture-feTurbulence"
          />
        </filter>
      </svg>
      <svg className="h-0 w-0">
        <filter id="grainyTexture2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </>
  )
}
export default GrainyTexture
