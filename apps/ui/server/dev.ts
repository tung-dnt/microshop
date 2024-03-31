import { bootstrap } from './express.js'
import { root } from './root.js'

export async function startDev() {
  // We instantiate Vite's development server and integrate its middleware to our server.
  // ⚠️ We instantiate it only in development. (It isn't needed in production and it
  // would unnecessarily bloat our production server.)
  const vite = await import('vite')
  const viteDevMiddleware = (
    await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
  ).middlewares

  const app = await bootstrap([viteDevMiddleware])

  const port = process.env.PORT || 3000

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

startDev()
