import { type HomeResponse } from '@/@types/home'
import { NextResponse } from 'next/server'

export const GET = async (): Promise<Response> => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/home`,
      {
        method: 'get',
        headers: {
          authorization: `Bearer ${process.env.API_KEY}`
        },
        next: {
          revalidate: 10
        }
      }
    )

    if (res.status !== 200) throw new Error('Internal Server Error')

    const data: HomeResponse = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json(
      {
        data: null,
        error: {
          status: 500,
          message: errorMessage
        }
      },
      {
        status: 500
      }
    )
  }
}
