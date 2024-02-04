import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  href: string
  className?: string
}

const Button = ({ children, href, className, ...props }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        'rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export default Button
