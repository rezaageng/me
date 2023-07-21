'use client'

const Error = ({
  error,
  reset
}: {
  error: Error
  reset: () => void
}): JSX.Element => {
  return (
    <div className="flex min-h-[calc(100dvh-65px)] w-full flex-col items-center justify-center px-6 py-4">
      <h1 className="text-2xl text-red-500">Something went wrong!</h1>
      <p className="text-center">Message: {error.message}</p>
      <button onClick={reset} className="btn-secondary mt-4">
        Try again
      </button>
    </div>
  )
}

export default Error
