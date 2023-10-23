import React from 'react'
import Head from 'next/head'
import Header from '../header'

interface Props {
  title: string
  children: React.ReactNode
}

export default function Main({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <main className="min-h-screen z-0">{children}</main>
    </>
  )
}
