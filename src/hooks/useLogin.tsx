import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { login } from '@/services/auth'
import type { AuthUser } from '@/types'

interface LoginHook {
  disabled: boolean
  isError: boolean
  isSecretPassword: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordSecret: () => void
}

export function useLogin(): LoginHook {
  const [authUser, setAuthUser] = useState<AuthUser>({
    username: '',
    password: ''
  })
  const [isSecretPassword, setPasswordSecret] = useState(true)
  const [disabled, setDisabled] = useState(true)
  const { mutate, isError } = useMutation({ mutationFn: login })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const values = { ...authUser, [e.target.name]: e.target.value }
    setAuthUser(values)

    const isDisabled = !Object.values(values).every(value => value !== '')
    setDisabled(isDisabled)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(authUser)
  }

  const handlePasswordSecret = () => {
    setPasswordSecret(!isSecretPassword)
  }

  return {
    disabled,
    isError,
    isSecretPassword,
    handleSubmit,
    handleChange,
    handlePasswordSecret
  }
}
