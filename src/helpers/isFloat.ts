import { type IsFloat } from '@/@types'

const isFloat: IsFloat = (number) => {
  return Number(number) === number && number % 1 !== 0
}

export default isFloat
