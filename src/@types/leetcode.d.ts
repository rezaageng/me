interface SolvedProblems {
  allQuestionsCount: Array<{
    difficulty: string
    count: number
  }>
  matchedUser: {
    username: string
    profile: {
      ranking: number
    }
    problemsSolvedBeatsStats: Array<{
      difficulty: string
      percentage: number | null
    }>
    submitStatsGlobal: {
      acSubmissionNum: Array<{
        difficulty: string
        count: number
        submissions: number
      }>
    }
  }
}
