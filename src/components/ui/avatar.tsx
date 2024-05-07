import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ImageIcon } from "lucide-react"

const avatarVariants = cva(
  "block size-10 rounded-full border object-cover transition-opacity hover:opacity-80",
  {
    variants: {
      variant: {
        default:
          "border-2 border-primary"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
  VariantProps<typeof avatarVariants> { }

function Avatar({ className, variant, ...props }: AvatarProps) {

  if (!props.src) {
    return (
      <div className={cn(avatarVariants({ variant }), className, "flex items-center justify-center")}>
        <ImageIcon className="size-4" />
      </div>
    )
  }

  return (
    <img className={cn(avatarVariants({ variant }), className)} {...props} />
  )
}

export { Avatar, avatarVariants }
