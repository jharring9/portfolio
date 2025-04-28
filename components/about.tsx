import { Card, CardContent } from "@/components/ui/card"
import { Code, LandPlot, Lightbulb, MapPinned, Music, Plane } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-primary/20 text-primary mb-2 border border-primary/30">
              <span className="text-sm font-medium">About Me</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              The Story So Far
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              A glimpse into who I am and what drives my passion for engineering
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2">
            <Card className="bg-background/40 backdrop-blur-md border-primary/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-start gap-2">
                  <div className="rounded-full bg-primary/20 p-2 border border-primary/30">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 text-left w-full">
                    <h3 className="text-xl font-bold">My Engineering Journey</h3>
                    <p className="text-muted-foreground mt-2 text-md">
                      Having studied Computer Science at Vanderbilt in Nashville, my fascination with
                      engineering extends far beyond the classroom. I've been lucky enough to work for a variety of companies
                      in different industries (from real estate to banking to Big Tech) to apply my engineering skills and knowledge.
                      I also have a growing portfolio of personal projects.
                      In short, I love solving complex problems and turning ideas into reality through elegant system design.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background/40 backdrop-blur-md border-accent/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-start gap-2">
                  <div className="rounded-full bg-accent/20 p-2 border border-accent/30">
                    <Lightbulb className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 text-left w-full">
                    <h3 className="text-xl font-bold">My Philosophy</h3>
                    <p className="text-muted-foreground mt-2 text-md">
                      I believe great technology solves real problems with simplicity, reliability, and scale.
                      I'm passionate about building systems that are robust, secure, and designed to perform under real-world demands, not just in ideal conditions.
                      Good engineering, to me, means delivering resilient solutions that are easy to maintain, scale gracefully, and have meaningful impact on users and businesses, whoever the end consumer may be.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            <h3 className="text-xl font-bold">When I'm Not Building</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center p-4 rounded-lg bg-background/40 backdrop-blur-md">
                <Plane className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm">Pilot</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-background/40 backdrop-blur-md">
                <Music className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm">Music Enthusiast</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-background/40 backdrop-blur-md">
                <MapPinned className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm">Traveler</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-background/40 backdrop-blur-md">
                <LandPlot className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm">Golfer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
