import { httpBatchLink, createTRPCProxyClient, loggerLink } from '@trpc/client'
import { AppRouter } from '../../server/src'

const client = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url: 'http://localhost:1337/trpc',
    }),
  ],
})

async function main() {
  const testQueryResult = await client.test.query()
  console.log({ testQueryResult })

  const getUsersQueryResult = await client.users.getUsers.query()
  console.log({ getUsersQueryResult })

  const updateUserMutationResult = await client.users.updateUser.mutate({
    id: 1,
    name: 'Changed!',
  })
  console.log({ updateUserMutationResult })

  const secretDataQueryResult = await client.secretData.query()
  console.log({ secretDataQueryResult })
}

main()
