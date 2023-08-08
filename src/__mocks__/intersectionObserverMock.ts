const intersectionObserverMock = (): Record<string, any> => ({
  observe: jest.fn(),
  disconnect: jest.fn()
})

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock)
