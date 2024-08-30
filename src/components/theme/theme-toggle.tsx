import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
// import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Moon, Sun } from "lucide-react"
export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? (
        <Sun className='cursor-pointer size-4 text-orange-300' />
      ) : (
        <Moon className='cursor-pointer size-4 text-sky-950' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </div>
  )
}
