import * as React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> { }

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            data-slot="skeleton"
            className={cn("bg-muted animate-pulse rounded-md", className)}
            {...props}
        />
    )
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
