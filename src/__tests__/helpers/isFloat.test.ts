import isFloat from '@/helpers/isFloat'

test('should return true for a float', () => {
  expect(isFloat(1.5)).toBe(true)
  expect(isFloat(-3.14)).toBe(true)
  expect(isFloat(0.1)).toBe(true)
})

test('should return false for an integer', () => {
  expect(isFloat(1)).toBe(false)
  expect(isFloat(-3)).toBe(false)
  expect(isFloat(0)).toBe(false)
})

test('should return false for NaN', () => {
  expect(isFloat(NaN)).toBe(false)
})
