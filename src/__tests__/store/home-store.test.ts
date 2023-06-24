import useHomeStore from '@/store/home-store'
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
        title: 'rezaa',
        subtitle: 'this is subtitle',
        description: 'description of me',
        anotherSide: 'another side',
        createdAt: '2023-02-06T07:37:17.769Z',
        publishedAt: '2023-02-06T07:44:18.682Z',
        updatedAt: '2023-04-05T07:07:49.751Z'
      }
    }
  }
  act(() => {
    result.current.setHomeData(homeData)
  })

  expect(result.current.homeData).toEqual(homeData)
})
