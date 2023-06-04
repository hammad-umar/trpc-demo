import { inferAsyncReturnType } from '@trpc/server'
import { CreateExpressContextOptions } from '@trpc/server/adapters/express'

export const createContext = ({ req, res }: CreateExpressContextOptions) => {
  return {
    req,
    res,
    isAuthenticated: true,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
