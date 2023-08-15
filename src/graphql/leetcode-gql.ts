import { gql } from '@apollo/client'

export const GET_LEET_SOLVED_PROBLEMS = gql`
  query SolvedProblems($username: String!) @api(name: leetCode) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      username
      profile {
        ranking
      }
      problemsSolvedBeatsStats {
        difficulty
        percentage
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`
