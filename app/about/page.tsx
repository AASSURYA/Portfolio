import Image from "next/image"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getSiteData } from "@/lib/utils"

export default function AboutPage() {
  const siteData = getSiteData()

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {siteData.about}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">My Journey</h2>
                  <p className="text-muted-foreground">
                    I'm passionate about creating exceptional digital experiences that make a difference. 
                    With a focus on modern technologies and user-centered design, I bring ideas to life 
                    through clean, efficient, and scalable solutions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">What I Do</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Frontend development with React, Next.js, and TypeScript</li>
                    <li>• UI/UX design and implementation</li>
                    <li>• Performance optimization and accessibility</li>
                    <li>• Team leadership and mentoring</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mx-auto">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <Image
                      src={siteData.avatar}
                      alt={siteData.name}
                      width={300}
                      height={300}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Experience</h2>
              <div className="space-y-6">
                {siteData.experience.map((exp, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <CardDescription className="text-lg">{exp.company}</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                          {exp.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="text-muted-foreground">
                            • {bullet}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
