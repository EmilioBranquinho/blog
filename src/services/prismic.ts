import * as prismic from '@prismicio/client'
import { IncomingMessage } from 'http'

export function getPrismicClient(req?: IncomingMessage) {
  const endpoint = prismic.getRepositoryEndpoint('4eyesdude') 
  const client = prismic.createClient(endpoint, {
    accessToken: '', 
  })
  return client
}
