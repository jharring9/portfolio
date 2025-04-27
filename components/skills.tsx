import { Card, CardContent } from "@/components/ui/card"
import {Database, Layout, Server, Braces, GitBranch, Cloudy} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React","HTML/CSS", "Tailwind CSS", "Remix.js"],
      borderColor: "border-primary/20",
      iconBg: "bg-primary/10",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]",
      color: "primary",
      bulletColor: "bg-primary",
    },
    {
      title: "Databases & Caching",
      icon: <Database className="h-8 w-8 text-blue-500" />,
      skills: ["DynamoDB", "MongoDB", "PostgreSQL", "SQL Server", "Redis"],
      borderColor: "border-blue-500/20",
      iconBg: "bg-blue-500/10",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      color: "blue-500",
      bulletColor: "bg-blue-500",
    },
    {
      title: "Programming Languages",
      icon: <Server className="h-8 w-8 text-accent" />,
      skills: ["Java", "Python", "C++", "C#", "JavaScript/TypeScript"],
      borderColor: "border-accent/20",
      iconBg: "bg-accent/10",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
      color: "accent",
      bulletColor: "bg-accent",
    },
    {
      title: "Data & AI Tools",
      icon: <Braces className="h-8 w-8 text-yellow-500" />,
      skills: ["Spark/Hadoop", "Elastic Map Reduce", "Amazon Bedrock", "OpenAI API"],
      borderColor: "border-yellow-500/20",
      iconBg: "bg-yellow-500/10",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
      color: "yellow-500",
      bulletColor: "bg-yellow-500",
    },
    {
      title: "Cloud",
      icon: <Cloudy className="h-8 w-8 text-orange-500" />,
      skills: ["AWS EC2/ECS", "Serverless (Lambda)", "SNS/SQS", "Elasticache", "SageMaker"],
      borderColor: "border-orange-500/20",
      iconBg: "bg-orange-500/10",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
      color: "orange-500",
      bulletColor: "bg-orange-500",
    },
    {
      title: "DevOps",
      icon: <GitBranch className="h-8 w-8 text-pink-500" />,
      skills: ["Git", "Docker", "CI/CD", "DataDog/CloudWatch"],
      borderColor: "border-pink-500/20",
      iconBg: "bg-pink-500/10",
      hoverGlow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
      color: "pink-500",
      bulletColor: "bg-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-accent/20 text-accent mb-2 border border-accent/30">
              <span className="text-sm font-medium">Skills</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Tech Toolbox</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Technologies and tools I've mastered along my journey
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`overflow-hidden bg-background/40 backdrop-blur-md ${category.borderColor} transition-all duration-300 group hover:bg-background/60 ${category.hoverGlow} hover:border-${category.color}/30`}
              >
                <CardContent className="p-6 flex flex-col items-center">
                  <div
                    className={`rounded-full ${category.iconBg} p-4 mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-${category.color}/20 border border-${category.color}/30`}
                  >
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 text-${category.color}`}>{category.title}</h3>
                  <ul className="space-y-3 w-full">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-muted-foreground flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-200 text-base"
                      >
                        <span className={`h-2 w-2 rounded-full ${category.bulletColor}`}></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
