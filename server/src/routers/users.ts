import { t } from '../trpc'
import { createUserSchema } from '../schemas/users'

const usersProcedure = t.procedure.input(createUserSchema)

export const usersRouter = t.router({
  getUsers: t.procedure.query(() => {
    return [
      {
        id: 1,
        name: 'Hammad Umar',
      },
      {
        id: 2,
        name: 'John Doe',
      },
    ]
  }),

  updateUser: usersProcedure.mutation(({ ctx, input }) => {
    console.log({ isAuthenticated: ctx.isAuthenticated })

    return { ...input }
  }),
})
