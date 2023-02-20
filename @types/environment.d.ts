declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string
      API_KEY: string
    }
  }
}

export {}
