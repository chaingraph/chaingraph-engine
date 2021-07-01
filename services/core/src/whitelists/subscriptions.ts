import { hasura } from './../hasura'

let isFirsLoad = true

export interface GetSubscriptionParams {
  resolve: (value: unknown) => void
  onData: (value: unknown) => void
  onError: (error: unknown) => void
}

export const getSubscription = ({
  resolve,
  onData,
  onError,
}: GetSubscriptionParams) => {
  hasura.getSubscription({
    url: process.env.HASURA_API || '',
    query: `subscription ContractMappings {
          mappings {
            api_user_id
            contract_name
            mapping
          }
        }`,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
    onData: (data) => {
      if (isFirsLoad) {
        isFirsLoad = false
        resolve(data)
      }
      onData(data)
    },
    onError: (error) => {
      if (isFirsLoad) {
        isFirsLoad = false
        resolve(error)
      }
      onError(error)
    },
  })
}
