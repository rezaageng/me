import useHomeStore from '@/stores/home-store'
import { act, renderHook } from '@testing-library/react'

test('should initialize with null homeData', () => {
  const { result } = renderHook(() => useHomeStore())
  expect(result.current.homeData).toBeNull()
})

test('should update homeData when setHomeData is called', () => {
  const { result } = renderHook(() => useHomeStore())
  const homeData: HomeResponse = {
    data: {
      id: 1,
      attributes: {
        title: "Hello, I'm rezaa.",
        subtitle:
          'Front-end developer and Informatics Engineering student at Pasundan University',
        createdAt: '2023-02-06T07:37:17.769Z',
        updatedAt: '2023-06-25T06:35:18.416Z',
        publishedAt: '2023-02-06T07:44:18.682Z',
        anotherSide: 'i like games, anime, manga, and manhwa',
        summary: 'I like to code especially in front end dev heheheheh'
      }
    }
  }
  act(() => {
    result.current.setHomeData(homeData)
  })

  expect(result.current.homeData).toEqual(homeData)
})
