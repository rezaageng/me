interface WakaAllTime {
  data: {
    total_seconds: number
    text: string
    decimal: string
    digital: string
    is_up_to_date: boolean
    percent_calculated: number
    range: {
      start: string
      start_date: string
      start_text: string
      end: string
      end_date: string
      end_text: string
      timezone: string
    }
    timeout: number
  }
}

interface WakaWeek {
  worldRank: number
  countryRank: number
  totalSeconds: number
  dailyAverage: number
  languages: Array<{ name: string; total: string }>
}
