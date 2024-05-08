import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "rounded-full py-0.5 px-2 bg-secondary inline-flex items-center text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border hover:bg-secondary/80",
        open:
          "border-transparent bg-yellow-500 text-secondary hover:bg-yellow-500/80",
        "in-progress":
          "border-transparent bg-green-500 text-secondary hover:bg-green-500/80",
        closed:
          "border-transparent bg-red-600 text-foreground hover:bg-red-600/80",
        done:
          "border-transparent bg-blue-500 text-foreground hover:bg-blue-500/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
