'use client'

import { type HomeResponse } from '@/@types/home'
import { useQuery } from '@tanstack/react-query'

const TerminalSummary = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['home'],
    queryFn: async () => {
      const res: Response = await fetch('/api/home')

      if (!res.ok) throw new Error('Network response was not ok')

      const data: HomeResponse = await res.json()

      return data
    }
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div data-testid="summary-error">failed to get data</div>

  return <div data-testid="summary">{data?.data?.attributes.summary}</div>
}
export default TerminalSummary
