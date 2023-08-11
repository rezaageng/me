declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string
      API_KEY: string
      WAKA_URL: string
      WAKA_KEY: string
      GITHUB_URL: string
      GITHUB_KEY: string
    }
  }
}

export {}
