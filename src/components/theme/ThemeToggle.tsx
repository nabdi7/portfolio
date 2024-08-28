"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()

  const isDarkMode = theme === "dark"

  return (
    <div
      className="cursor-pointer inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      <Sun className={`h-[1.5rem] w-[1.3rem] ${isDarkMode ? "hidden" : "block"}`} />
      <Moon className={`h-5 w-5 ${isDarkMode ? "block" : "hidden"}`} />
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}
