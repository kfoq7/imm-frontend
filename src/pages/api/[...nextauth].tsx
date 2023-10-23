import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login } from '@/services/auth'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const user = login(credentials)
      }
    })
  ]
})
