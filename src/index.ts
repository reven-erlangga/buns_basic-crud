import { Elysia } from 'elysia'
import { autoroutes } from 'elysia-autoroutes'

const app = new Elysia()
  .use(autoroutes({
    routesDir: './routes',
  }))
  .listen(3000)

export type ElysiaApp = typeof app