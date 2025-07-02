'use client'

import { ToastContainer } from 'react-toastify'

export const ToastWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastContainer stacked /> {children}
    </>
  )
}
