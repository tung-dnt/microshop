import compression from 'compression'
import dotenv from 'dotenv'
import express from 'express'
import { renderPage } from 'vike/server'

export async function bootstrap(middlewares: express.RequestHandler[]) {
  const app = express()

  dotenv.config()

  app.use(express.static('public'))
  app.use(compression())
  app.use(middlewares)

  // ...
  // Other middlewares (e.g. some RPC middleware such as Telefunc)
  // ...

  // Vike middleware. It should always be our last middleware (because it's a
  // catch-all middleware superseding any middleware placed after it).
  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    }
    const pageContext = await renderPage(pageContextInit)

    if (pageContext.errorWhileRendering) {
      // Install error tracking here, see https://vike.dev/errors
    }

    const { httpResponse } = pageContext

    if (!httpResponse) {
      return next()
    } else {
      const { body, statusCode, headers, earlyHints } = httpResponse

      if (res.writeEarlyHints)
        res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode)
      // For HTTP streams use httpResponse.pipe() instead, see https://vike.dev/stream
      res.send(body)
    }
  })

  return app
}
