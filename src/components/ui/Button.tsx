
'use client'

import { ButtonHTMLAttributes, forwardRef, ReactElement, cloneElement } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-brand-blue text-white hover:bg-blue-700',
      secondary: 'bg-white text-brand-blue border-2 border-brand-blue hover:bg-blue-50',
      outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    const classes = cn(baseClasses, variants[variant], sizes[size], className)

    if (asChild && children) {
      const child = children as ReactElement<any>
      return cloneElement(child, {
        className: cn(classes, child.props?.className),
        ...props
      })
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
