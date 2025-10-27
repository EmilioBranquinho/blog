import * as prismic from '@prismicio/client'

export function getPrismicClient() {
  const endpoint = prismic.getRepositoryEndpoint('4eyesdude') 
  const client = prismic.createClient(endpoint, {
    accessToken: '', 
  })
  return client
}
