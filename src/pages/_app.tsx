import type { AppProps } from 'next/app'

import { ThemeProvider } from '../providers'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
