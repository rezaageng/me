import ordinal from '@/helpers/ordinal'

test('should return st', () => {
  expect(ordinal(1)).toBe('st')
  expect(ordinal(21)).toBe('st')
  expect(ordinal(38484751)).toBe('st')
})

test('should return nd', () => {
  expect(ordinal(2)).toBe('nd')
  expect(ordinal(22)).toBe('nd')
  expect(ordinal(38484752)).toBe('nd')
})

test('should return rd', () => {
  expect(ordinal(3)).toBe('rd')
  expect(ordinal(23)).toBe('rd')
  expect(ordinal(38484753)).toBe('rd')
})

test('should return th', () => {
  expect(ordinal(4)).toBe('th')
  expect(ordinal(28)).toBe('th')
  expect(ordinal(38484756)).toBe('th')
})
