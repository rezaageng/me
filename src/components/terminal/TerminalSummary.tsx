'use client'

import { useQuery } from '@tanstack/react-query'

const TerminalSummary = (): JSX.Element => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['home'],
    queryFn: async () => {
      const res: Response = await fetch('/api/home')

      const data: HomeResponse = await res.json()

      return data
    }
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>failed to get data</div>

  return <div>{data?.data?.attributes.summary}</div>
}
export default TerminalSummary
