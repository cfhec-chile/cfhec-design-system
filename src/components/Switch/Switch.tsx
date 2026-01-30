import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export interface SwitchProps
    extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> { }

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    SwitchProps
>(({ className, ...props }, ref) => (
    <SwitchPrimitive.Root
        ref={ref}
        data-slot="switch"
        className={cn(
            "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent shadow-sm transition-all outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}
    >
        <SwitchPrimitive.Thumb
            data-slot="switch-thumb"
            className={cn(
                "bg-background pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            )}
        />
    </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
