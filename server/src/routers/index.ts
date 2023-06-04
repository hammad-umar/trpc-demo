import { authenticatedProcedure } from '../middlewares/auth'
import { usersRouter } from './users'
import { t } from '../trpc'

export const appRouter = t.router({
  test: t.procedure.query(() => {
    return 'Testing...'
  }),

  secretData: authenticatedProcedure.query(({ ctx }) => {
    console.log({ user: ctx.user })

    return 'Super Secret Data...'
  }),

  // Nested Routers ...
  users: usersRouter,
})
