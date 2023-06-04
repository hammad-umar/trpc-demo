import { z } from 'zod'

export const createUserSchema = z.object({
  id: z.number(),
  name: z.string(),
})
