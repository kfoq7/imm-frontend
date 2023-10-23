import type { AuthUser } from '../types'

export const login = async (data: AuthUser) => {
  return await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
}
