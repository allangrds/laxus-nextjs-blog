import type { AppProps } from 'next/app'

import { Layout } from '../components'
import { ThemeProvider } from '../providers'

import './prism.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default MyApp
