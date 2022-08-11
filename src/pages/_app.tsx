import type { AppProps } from 'next/app'

import { ThemeProvider } from '../providers'

import './index.css'
import './prism.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
