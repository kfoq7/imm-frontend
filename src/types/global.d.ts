import React from 'react'

declare global {
  type FC<P = {}> = React.FunctionComponent<P & { children?: React.ReactNode }>
}
