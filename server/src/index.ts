import express from 'express'
import cors from 'cors'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { appRouter } from './routers'
import { createContext } from './context'

const port = process.env.PORT || 1337
const app = express()

app.use(cors())
app.use('/trpc', createExpressMiddleware({ router: appRouter, createContext }))

const server = app.listen(port, () => {
  console.log(`Server is up on port:${port}`)
})

process.on('unhandledRejection', (err) => {
  if (err) {
    console.log('Server Error: ', err)
    server.close(() => process.exit(1))
  }
})

export type AppRouter = typeof appRouter
