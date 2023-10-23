import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '@/components/layouts/main'

const queryClient = new QueryClient()

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.asPath === '/login') {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout title="IMM Instituto Médico de la Mujer - EGI">
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
