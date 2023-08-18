const ordinal = (num: number): string => {
  const lastNum = num.toString().split('').reverse()[0]

  switch (lastNum) {
    case '1':
      return 'st'
    case '2':
      return 'nd'
    case '3':
      return 'rd'
    default:
      return 'th'
  }
}

export default ordinal
