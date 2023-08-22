import timeConvert from '@/helpers/time-convert'

test('should return the correct number of hours', () => {
  expect(timeConvert(7200, 'hours')).toBe('2')
  expect(timeConvert(3600, 'hours')).toBe('1')
  expect(timeConvert(3661, 'hours')).toBe('1')
  expect(timeConvert(0, 'hours')).toBe('0')
})

test('should return the correct number of minutes', () => {
  expect(timeConvert(7200, 'minutes')).toBe('0')
  expect(timeConvert(3600, 'minutes')).toBe('0')
  expect(timeConvert(3661, 'minutes')).toBe('1')
  expect(timeConvert(65, 'minutes')).toBe('1')
  expect(timeConvert(0, 'minutes')).toBe('0')
})
