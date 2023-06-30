import { NextResponse } from 'next/server'

export const GET = async (): Promise<NextResponse> => {
  try {
    const res: Response = await fetch(
      `${process.env.API_URL}/api/experiences`,
      {
        method: 'get',
        headers: {
          authorization: `Bearer ${process.env.API_KEY}`
        }
      }
    )

    if (res.status !== 200) throw new Error('Internal Server Error')

    const data: ExperiencesResponse = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json({
      data: null,
      error: {
        status: 500,
        message: errorMessage
      }
    })
  }
}
