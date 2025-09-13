"use client"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function Toggle() {
  const [isDark, setIsDark] = useState(false)
  const [isSystemDark, setIsSystemDark] = useState(false)

  // Check system preference and localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    // Set initial theme based on saved preference or system
    if (savedTheme === "dark" || (!savedTheme && systemDark)) {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    }
    
    // Set initial system theme state
    setIsSystemDark(systemDark)
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const isDarkMode = e.matches
      setIsSystemDark(isDarkMode)
      
      // Only update theme if user hasn't set a preference
      if (!localStorage.getItem("theme")) {
        if (isDarkMode) {
          document.documentElement.classList.add("dark")
          setIsDark(true)
        } else {
          document.documentElement.classList.remove("dark")
          setIsDark(false)
        }
      }
    }
    
    mediaQuery.addEventListener("change", handleSystemThemeChange)
    
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <div
      onClick={toggleTheme}
      className='bg-gr text-blk p-2 cursor-pointer rounded-[4px]'> {isDark ? <Sun /> : <Moon />}
     
    </div>
  )
}
