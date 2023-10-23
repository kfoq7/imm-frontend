import React from 'react'

interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => (
  <button className="px-16 py-3 mt-8 rounded-md border text-white font-semibold text-lg bg-blue-primary border-blue-primary text-md flex items-center justify-center disabled:bg-blue disabled:border-blue">
    {children}
  </button>
)
