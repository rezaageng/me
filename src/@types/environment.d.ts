declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string
      API_KEY: string
      WAKA_KEY: string
      NEXT_PUBLIC_WAKA_COUNTRY: string
      WAKA_COUNTRY_CODE: string
      GITHUB_USERNAME: string
      GITHUB_KEY: string
      LEETCODE_USERNAME: string
    }
  }
}

export {}
