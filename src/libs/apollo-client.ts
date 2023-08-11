import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.GITHUB_URL}/graphql`,
      headers: {
        authorization: `Bearer ${process.env.GITHUB_KEY}`
      }
    }),
    cache: new InMemoryCache()
  })
})
