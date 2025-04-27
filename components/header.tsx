"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false)
    }
  }, [isDesktop])

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop + 100, // Offset for header height
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/20">
      <div className="container flex h-16 items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.id)}
              className="text-sm font-medium transition-colors hover:text-primary relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background/95 backdrop-blur-md",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="grid grid-flow-row auto-rows-max text-center text-lg gap-6 p-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium transition-colors hover:text-primary"
              onClick={(e) => handleScrollToSection(e, item.id)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
