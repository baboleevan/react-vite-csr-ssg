import React from 'react'
import ReactDOM from 'react-dom/client'
import { PageContextClient } from 'vite-plugin-ssr/client'
import '../index.css'

export { render }

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <React.StrictMode>
      <Page {...pageProps} />
    </React.StrictMode>
  )
}