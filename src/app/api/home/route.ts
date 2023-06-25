import { NextResponse } from 'next/server'

export const GET = async (): Promise<NextResponse> => {
  const res: Response = await fetch(`${process.env.API_URL}/api/home`, {
    method: 'get',
    headers: {
      authorization: `Bearer ${process.env.API_KEY}`
    }
  })

  const data: HomeResponse = await res.json()

  return NextResponse.json(data)
}
