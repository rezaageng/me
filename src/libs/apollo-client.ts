import { gitHubUrl, leetCodeUrl } from '@/constants/endpoints'
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { MultiAPILink } from '@habx/apollo-multi-endpoint-link'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    // link: new HttpLink({
    //   uri: 'https://api.github.com/graphql',
    //   headers: {
    //     authorization: `Bearer ${process.env.GITHUB_KEY}`
    //   },
    //   fetchOptions: {
    //     next: { revalidate: 10 }
    //   }
    // }),
    link: ApolloLink.from([
      new MultiAPILink({
        endpoints: {
          gitHub: gitHubUrl,
          leetCode: leetCodeUrl
        },
        getContext: (endpoint) => {
          if (endpoint === 'gitHub') {
            return {
              headers: {
                authorization: `Bearer ${process.env.GITHUB_KEY}`
              }
            }
          }
          return {}
        },
        createHttpLink: () =>
          createHttpLink({
            fetchOptions: {
              next: { revalidate: 10 }
            }
          })
      })
    ]),
    cache: new InMemoryCache()
  })
})
