type type = 'hours' | 'minutes'

const timeConvert = (seconds: number, type: type): string => {
  if (type === 'hours') return Math.floor(seconds / 3600).toFixed(0)

  return Math.floor((seconds % 3600) / 60).toFixed(0)
}

export default timeConvert
