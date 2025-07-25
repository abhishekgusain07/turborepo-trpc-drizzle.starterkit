"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="h-9 w-9 rounded-md border bg-background flex items-center justify-center">
        <div className="h-4 w-4 animate-pulse bg-muted rounded" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    console.log(
      "Theme toggle clicked. Current theme:",
      theme,
      "Resolved:",
      resolvedTheme,
    );
    const newTheme = isDark ? "light" : "dark";
    console.log("Setting theme to:", newTheme);
    setTheme(newTheme);
  };

  console.log(
    "ThemeSwitch render - mounted:",
    mounted,
    "theme:",
    theme,
    "resolvedTheme:",
    resolvedTheme,
    "isDark:",
    isDark,
  );

  return (
    <button
      onClick={handleToggle}
      className="h-9 w-9 rounded-md border bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeSwitch;
