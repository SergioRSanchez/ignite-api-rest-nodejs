import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)

// GLOBAL HOOK THAT WORKS IN ALL ROUTES
// HOOK GLOBAL QUE FUNCIONA EM TODAS AS ROTAS
// app.addHook('preHandler', async (request) => {
//   console.log(`[${request.method}] ${request.url}`)
// })

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
