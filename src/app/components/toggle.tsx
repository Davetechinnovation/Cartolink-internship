"use client"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react" // npm install lucide-react

export default function Toggle() {
  const [isDark, setIsDark] = useState(false)

  // When the component mounts, check saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
      setIsDark(true)
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
      className='bg-gray-200 p-2 cursor-pointer rounded-[4px]'> {isDark ? <Sun /> : <Moon />}
     
    </div>
  )
}
