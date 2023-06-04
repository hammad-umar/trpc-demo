import { TRPCError } from '@trpc/server'
import { t } from '../trpc'

export const isAuthenticatedMiddleware = t.middleware(({ ctx, next }) => {
  if (!ctx.isAuthenticated) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({ ctx: { user: { id: 1 } } })
})

export const authenticatedProcedure = t.procedure.use(isAuthenticatedMiddleware)
