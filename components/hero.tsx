"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const imageRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = (y - centerY) / 10
    const tiltY = (centerX - x) / 10

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section id="home" className="relative py-8 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Code className="h-4 w-4 text-accent"/>
                <span>Software Engineer & Creative Developer</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm <span className="gradient-text font-extrabold">Jack Harrington</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I design, build, and maintain <span className="text-primary">robust</span> and <span
                  className="text-accent">performant</span> systems that power digital experiences at scale.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" asChild>
                <Link
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault()
                    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Sparkles className="mr-2 h-4 w-4" /> Explore My Experience
                </Link>
              </Button>
              <Button variant="outline" className="gradient-border" asChild>
                <Link
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Projects
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="https://github.com/jharring9" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="https://linkedin.com/in/jharrington22" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              ref={imageRef}
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-20 scale-110"></div>
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 w-[280px] h-[280px] md:w-[350px] md:h-[350px] backdrop-blur-sm bg-background/30">
                <img src="/profile.png?height=350&width=350" alt="Profile Picture" className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent/80 text-accent-foreground p-3 rounded-full shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
