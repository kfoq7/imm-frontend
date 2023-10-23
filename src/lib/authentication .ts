import { getSession } from 'next-auth/react'
import type { GetServerSidePropsContext } from 'next'
import type { Session } from 'next-auth'

export async function requireAuth(
  context: GetServerSidePropsContext,
  cb: ({ session }: { session: Session }) => any
) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return cb({ session })
}
