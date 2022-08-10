import type { AppProps } from 'next/app'

import { Layout } from '../components'
import { ThemeProvider } from '../providers'

import './prism.css'
import './prism-line-numbers.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default MyApp
