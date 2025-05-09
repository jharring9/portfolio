import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Amazon",
      logo: "/amazon.svg?height=60&width=60",
      positions: [
        {
          title: "Software Development Engineer",
          team: "Amazon Ads, Publisher Ad Server",
          period: "Jan 2024 - Present",
          type: "Full-time",
          description:
            "I design and optimize distributed ad-serving infrastructure and software components at Amazon Ads - delivering low-latency, extremely high-throughput performance at global scale.\n\n" +
              "I led architecture and development of an agentic AI deal monitoring platform leveraging retrieval-augmented generation (RAG) for real-time diagnostics, integrated Amazon Music into Amazon's supply-side ad platform, and drove $2M+ annual cost savings through strategic service and infrastructure optimization.\n\n" +
              "I have mentored several interns and new hires, frequently lead cross-team design reviews, and contribute to the team's technical roadmap."
        },
        {
          title: "Software Development Engineer Intern",
          team: "Payments Services",
          period: "Summer 2022",
          type: "Internship",
          description:
            "During my internship with Amazon Payments Services, I built a serverless backfill framework using AWS Lambda and Step Functions to automate reconciliation of large-scale payment discrepancies.\n" +
              "I also developed Java-based tooling to streamline recategorization processes, improving accuracy and reducing manual operational overhead."
        },
      ],
      location: "Arlington, VA (Amazon HQ2)",
      skills: ["DynamoDB", "Lambda", "OpenSearch", "Bedrock", "Spark/Hadoop"],
      gradientClass: "from-primary to-primary/60",
      colorClass: "text-primary",
      borderClass: "border-primary/20 hover:border-primary/30",
      shadowClass: "hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]",
    },
    {
      company: "CoStar Group",
      logo: "/costar.svg?height=60&width=60",
      positions: [
        {
          title: "Associate Software Developer",
          team: "Homes.com",
          period: "Aug 2023 - Dec 2023",
          type: "Full-time",
          description:
            "As part of the Homes.com relaunch, I optimized backend APIs to support millions of daily real estate queries.\n" +
              "I improved home search availability by tuning SQL queries, working with DynamoDB indexing, and supporting the data ingestion pipeline for hundreds of real estate feeds. Participated in agile development processes and code reviews.",
        },
      ],
      location: "Washington, DC",
      skills: ["C#", "AWS SQS", "DataDog", "RabbitMQ", "SQL Server"],
      gradientClass: "from-accent to-accent/60",
      colorClass: "text-accent",
      borderClass: "border-accent/20 hover:border-accent/30",
      shadowClass: "hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)]",
    },
    {
      company: "BNY",
      logo: "/bnymellon.svg?height=60&width=60",
      positions: [
        {
          title: "Developer Intern",
          team: "Internal Audit",
          period: "May 2021 - Jan 2022",
          type: "Internship",
          description:
            "As a Developer Intern at BNY Mellon, I created a prioritization algorithm approved by the Chief Auditor, improving project selection efficiency across the department.\n" +
              "I also built live dashboards and reporting tools with Java, SQL, and PowerBI to enhance visibility into team performance and decision-making.",
        },
      ],
      location: "New York, NY",
      skills: ["Java", "SQL", "PowerBI"],
      gradientClass: "from-blue-500 to-blue-500/60",
      colorClass: "text-blue-500",
      borderClass: "border-blue-500/20 hover:border-blue-500/30",
      shadowClass: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-primary/10 text-primary mb-2">
              <span className="text-sm font-medium">Experience</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Where I've Worked
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              My professional journey building technology
            </p>
          </div>

          <div className="mx-auto w-full max-w-4xl space-y-8 py-8">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                className={`overflow-hidden bg-background/40 backdrop-blur-md ${experience.borderClass} transition-all duration-300 ${experience.shadowClass}`}
              >
                <CardContent className="p-0">
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${experience.gradientClass}`}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 rounded-md bg-background/60 border border-border/50">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className={`text-2xl font-bold ${experience.colorClass} text-left`}>
                          {experience.company}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-end hidden md:flex">
                        {experience.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className={`bg-${experience.colorClass}/10 text-${experience.colorClass} hover:bg-${experience.colorClass}/20`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6 mt-6">
                      {experience.positions.map((position, posIndex) => (
                        <div key={posIndex} className="border-t border-border/30 pt-4">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                            <div className="text-left">
                              <div className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">{position.title}</span>
                                <Badge
                                  variant="outline"
                                  className={`ml-1 bg-foreground/5 text-foreground/70 border-foreground/20 hover:bg-foreground/10 hidden md:flex`}
                                >
                                  {position.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <span className="font-medium text-foreground/80">Team:</span>
                                <span>{position.team}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <Calendar className="h-3 w-3" />
                                <span>{position.period}</span>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 text-muted-foreground text-left">{position.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
