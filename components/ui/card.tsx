"use client"

import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"
