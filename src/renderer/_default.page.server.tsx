import React from 'react'
import { PageContextServer } from 'vite-plugin-ssr'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'

export { render }
export { passToClient }

// Add this line to specify which properties should be passed to the client
const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  const pageHtml = renderToString(
    <React.StrictMode>
      <Page {...pageProps} />
    </React.StrictMode>
  )

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}