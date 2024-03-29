import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../ui/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout {...pageProps} >
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
