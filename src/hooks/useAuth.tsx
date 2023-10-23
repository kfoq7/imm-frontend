import { getSession } from 'next-auth/react'

export async function useAuth(context, cb) {
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
