import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css';
// import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
