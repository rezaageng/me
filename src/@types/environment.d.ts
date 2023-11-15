declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      API_KEY: string
      WAKA_KEY: string
      NEXT_PUBLIC_WAKA_COUNTRY: string
      WAKA_COUNTRY_CODE: string
      GITHUB_USERNAME: string
      GITHUB_KEY: string
      LEETCODE_USERNAME: string
      NEXT_PUBLIC_GA_MEASUREMENT_ID: string
      NEXT_PUBLIC_APP_VERSION: string
    }
  }
  interface Window {
    gtag: any
  }
}

export {}
