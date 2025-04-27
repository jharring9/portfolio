import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "WagerWire",
      description:
        "Weekly NFL fantasy betting platform built on AWS Lambda, supporting configurable groups, live odds updates, and automated scoring.",
      image: "https://wagerwire-webassets.s3.amazonaws.com/home-image.png?height=300&width=600",
      liveUrl: "#",
      githubUrl: "https://github.com/jharring9/wager-wire",
    },
    {
      title: "ByteBracket.io",
      description: "A real-time March Madness platform built on AWS, supporting automated scoring simulations, live leaderboards, and scalable event handling.",
      image: "https://wagerwire-webassets.s3.amazonaws.com/bytebracket-home.png?height=300&width=600",
      liveUrl: "https://bytebracket.io/",
      githubUrl: "https://github.com/jharring9/ByteBracket",
    },
    {
      title: "Portfolio Site",
      description: "This website! Designed as an elegant showcase of my background, experience, and skillset.",
      image: "https://wagerwire-webassets.s3.amazonaws.com/portfolio-home.png?height=300&width=600",
      liveUrl: "https://jack-harrington.com/",
      githubUrl: "https://github.com/jharring9",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-primary/20 text-primary mb-2 border border-primary/30">
              <span className="text-sm font-medium">Projects</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">My Creations</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              A showcase of my favorite projects and digital experiments
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden flex flex-col bg-background/40 backdrop-blur-md border-primary/10 group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full flex-1" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity flex-1"
                    asChild
                  >
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="gradient-border rounded-full" asChild>
            <Link href="https://github.com/jharring9" target="_blank" rel="noopener noreferrer">
              See More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
