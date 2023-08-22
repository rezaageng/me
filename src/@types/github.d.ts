interface Repository {
  id: number
  node_id: string
  name: string
  full_name: string
  stargazers_count: number
}

interface Repositories {
  data: Repository[]
  total_stargazers: number
  count: number
}

interface GitHubStats {
  user: {
    contributionsCollection: {
      totalCommitContributions: number
    }
    repositoriesContributedTo: {
      totalCount: number
    }
    pullRequests: {
      totalCount: number
    }
    openIssues: {
      totalCount: number
    }
    closedIssues: {
      totalCount: number
    }
    repositories: {
      totalCount: number
      nodes: Array<{
        stargazers: {
          totalCount: number
        }
        name: string
      }>
      pageInfo: {
        hasNextPage: boolean
        endCursor: string
      }
    }
  }
}
