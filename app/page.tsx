import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Colorful background blobs */}
      <div className="blob blob-primary w-[500px] h-[500px] top-[-100px] left-[-200px]"></div>
      <div className="blob blob-accent w-[600px] h-[600px] top-[20%] right-[-300px]"></div>
      <div className="blob blob-blue w-[500px] h-[500px] top-[40%] left-[-200px]"></div>
      <div className="blob blob-purple w-[700px] h-[700px] bottom-[10%] right-[-300px]"></div>
      <div className="blob blob-pink w-[400px] h-[400px] bottom-[30%] left-[10%]"></div>
      <div className="blob blob-yellow w-[300px] h-[300px] top-[60%] right-[20%]"></div>

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Header />
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
