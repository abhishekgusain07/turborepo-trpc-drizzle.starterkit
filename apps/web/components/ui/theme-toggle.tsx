"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { useMounted } from "@mantine/hooks";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import React from "react";
import { Moon, Sun} from "app/icons";

const ThemeSwitch = () => {
  const mounted = useMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  if (!mounted) {
    return (
      <div className="inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent bg-input shadow-xs">
        <div className="pointer-events-none flex size-4 items-center justify-center rounded-full bg-background transition-transform duration-300" />
      </div>
    );
  }
  
  const isDark = resolvedTheme === "dark";
  
  return (
    <Switch 
      checked={isDark} 
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} 
    />
  );
};

export default ThemeSwitch;

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();
  
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none flex size-4 items-center justify-center rounded-full text-black ring-0 transition-transform duration-300 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
        )}
      >
        {mounted && (resolvedTheme === "dark" ? <Moon className="mx-auto size-2.5" /> : <Sun className="mx-auto size-2.5" />)}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}
