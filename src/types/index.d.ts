export type User = {
  username: string
  password: string
}

export type AuthUser = Record<'username' | 'password', string>

export type FocusLogin = Record<'username' | 'password', boolean>
