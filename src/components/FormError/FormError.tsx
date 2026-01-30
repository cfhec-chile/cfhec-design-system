import * as React from "react";
import { cn } from "@/lib/utils";

export interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
    message?: string;
}

const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(
    ({ className, message, children, ...props }, ref) => {
        const content = message || children;

        if (!content) return null;

        return (
            <p
                ref={ref}
                data-slot="form-error"
                className={cn(
                    "text-sm font-medium text-destructive mt-1.5",
                    className
                )}
                role="alert"
                {...props}
            >
                {content}
            </p>
        );
    }
);
FormError.displayName = "FormError";

export { FormError };
