const Loading = (): JSX.Element => {
  return (
    <div className="fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center bg-primary">
      <div className="absolute h-40 w-40 rounded-full bg-accent-1 opacity-50 blur-3xl" />
      <div className="absolute left-0 top-0 h-full w-full opacity-40 [filter:url('#grainyTexture')]" />
      <span className="animate-pulse font-mono text-2xl font-bold text-accent-1">
        re().rendering
      </span>
    </div>
  )
}
export default Loading
