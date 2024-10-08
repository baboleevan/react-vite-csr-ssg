import { PageContextBuiltIn } from 'vite-plugin-ssr'

export { onBeforeRender }

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  // You can fetch data here for SSG
  const pageProps = { message: 'This page is statically generated!' }
  return {
    pageContext: {
      pageProps
    }
  }
}